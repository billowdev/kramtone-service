import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../common/constants';
import { CreateUserDto } from '../dto/create-user-account.dto';
import { UpdateUserDto } from '../dto/update-user-account.dto';
import { UserEntity } from '../../../modules/user-account/entities/user-account.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from '../dto/token.dto';
import * as argon from 'argon2'
import { UserArrayType } from '../types/user-account.types';
import { SignDto } from '../dto/sign.dto';
import { encryptAES } from '../../../common/utils/aes-encrypt.util';
import { SignUpDto } from './../dto/signup-user-account.dto';
import { GroupDataService } from './../../group-data/services/group-data.service';
import { LoginDto } from './../dto/login.dto';
import { Op } from 'sequelize';
import { GroupTypeEnum } from '../../group-data/types/group-data.types.enum';


@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: typeof UserEntity,
    private readonly jwtService: JwtService,

    @Inject(forwardRef(() => GroupDataService))
    private groupDataService: GroupDataService,
  ) { }

  // generate token
  private async generateToken(auth: TokenDto): Promise<string> {
    const token: string = await this.jwtService.signAsync(auth);
    return token
  }

  // password hasing
  private async hashPassword(password: string): Promise<string> {
    const hash: string = await argon.hash(password, { type: argon.argon2id });
    return hash;
  }

  // check password
  private async comparePassword(password: string, dbPassword: string): Promise<boolean> {
    const match: boolean = await argon.verify(dbPassword, password)
    return match;
  }

  // find user by username
  public async findOneByUsername(username: string): Promise<UserEntity> {
    try {
      return await this.userRepo.findOne({
        where: { username },
        raw: true
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  // validate authentication
  public async validateAuth(username: string, pass: string) {
    try {
      const user = await this.findOneByUsername(username);

      if (!user) {
        return null;
      }
      const match = await this.comparePassword(pass, user.hashPassword);
      if (!match) {
        return null;
      }
      const result = user
      delete result.hashPassword

      return result;
    } catch (error) {
      throw new BadRequestException()
    }
  }

  public async refreshToken(auth: TokenDto): Promise<TokenDto> {
    try {
      const { sub, role } = auth
      const refreshToken: string = await this.generateToken({ sub, role });
      const payload: TokenDto = {
        sub, role, refreshToken
      }
      return payload
    } catch (error) {
      throw new BadRequestException()
    }
  }

  // repository

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.userRepo.create<UserEntity>(createUserDto)
    } catch (error) {
      console.log(error)
      throw new BadRequestException()
    }
  }

  async findAll(keyword: string, page: number, pageSize: number): Promise<UserArrayType> {
    try {
      const offset = (page - 1) * pageSize;
      if (keyword) {
        return await this.userRepo.findAll<UserEntity>({
          where: {
            [Op.or]: [
              {
                name: { [Op.iLike]: `%${keyword}%` },
              },
              {
                surname: { [Op.iLike]: `%${keyword}%` },
              },
              {
                username: { [Op.iLike]: `%${keyword}%` },
              },
              {
                email: { [Op.iLike]: `%${keyword}%` },
              },
              {
                phone: { [Op.iLike]: `%${keyword}%` },
              }
            ]
          },
          attributes: {
            exclude: ['hashPassword']
          }
        });
      } else if (page && pageSize) {
        return await this.userRepo.findAll<UserEntity>({
          offset,
          limit: pageSize,
          attributes: {
            exclude: ['hashPassword']
          }
        });
      }
      else {
        return await this.userRepo.findAll<UserEntity>({
          attributes: {
            exclude: ['hashPassword']
          }
        });
      }
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findOne(id: string): Promise<UserEntity> {
    try {
      return await this.userRepo.findOne<UserEntity>({
        where: { id },
        attributes: {
          exclude: ['hashPassword']
        }
      })
    } catch (error) {
      throw new BadRequestException()
    }

  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<number[]> {
    try {
      return await this.userRepo.update<UserEntity>(
        {
          ...updateUserDto
        },
        {
          where: { id }
        }
      )
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async remove(id: string) {
    try {
      return await this.userRepo.destroy({
        where: { id }
      })

    } catch (error) {
      throw new BadRequestException()
    }
  }


  // signin : login service
  public async signin(body: LoginDto): Promise<SignDto> {
    try {
      // find user id and role from auth
      const user: UserEntity = await this.findOneByUsername(body.username)
      const { id, role } = user
      delete user.hashPassword
      const payload = { sub: id, role }
      const token = await this.generateToken(payload);
      const SignData: SignDto = { user, token }
      const encrypt: string = encryptAES(SignData);
      return SignData

    } catch (error) {
      throw new BadRequestException()
    }
  }

  // signup : register service
  public async signup(userSignUp: SignUpDto): Promise<SignDto> {
    try {

      const hashPassword = await this.hashPassword(userSignUp.password);
      delete userSignUp.password;

      const createUser = await this.create({ ...userSignUp, hashPassword });

      delete createUser.hashPassword
      // so for user account admin will verify too that is "activate" field in user table.
      // and the user will be have a group by default.
      // The Group Hooking that for group of user-account.
      // after that admin will be verify that again.
      // because the group or user will be a real person.
      // const addressHook = await this.addressService.create({
      //   houseNo: "",
      //   villageNo: "",
      //   village: "",
      //   subDistrict: "",
      //   district: "",
      //   province: "",
      //   zipCode: "",
      // });
      const groupHook = await this.groupDataService.create({
        groupName: "",
        groupType: GroupTypeEnum.SHOP,
        agency: "",
        phone: "",
        email: "",
        logo: "",
        banner: "",
       
        // addressId: addressHook['dataValues'].id,
        verified: false,
      })
      await this.update(createUser.id, {
        ...createUser['dataValues'],
        groupId: groupHook['dataValues'].id
      })
      const userData = await this.userRepo.findOne({
        where: {
          id: createUser.id,
        },
      })
      delete userData['dataValues'].hashPassword
      const payload = {
        sub: createUser['dataValues'].id,
        role: createUser['dataValues'].role
      }
      const token = await this.generateToken(payload);
      return { user: userData, token };
    } catch (error) {
      console.log('=========== err =========================');
      console.log(error);
      console.log('====================================');
      throw new BadRequestException()
    }
  }

}
