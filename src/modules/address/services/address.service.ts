import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ADDRESS_REPOSITORY } from '../../../common/constants';
import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { AddressEntity } from '../entities/address.entity';
import { AddressArrayType } from '../types/address';

@Injectable()
export class AddressService {

  constructor(
    @Inject(ADDRESS_REPOSITORY) private readonly addressRepo: typeof AddressEntity,
  ) { }

  public async create(createAddressDto: CreateAddressDto): Promise<AddressEntity> {
    try {
      return await this.addressRepo.create<AddressEntity>(createAddressDto, {
        returning: true
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  public async findAll(): Promise<AddressArrayType> {
    try {
      return await this.addressRepo.findAll<AddressEntity>();
    } catch (error) {
      throw new BadRequestException()
    }
  }

  public async findOne(id: string): Promise<AddressEntity> {
    try {
      return await this.addressRepo.findByPk<AddressEntity>(id)
    } catch (error) {
      throw new BadRequestException()
    }
  }

  public async update(id: string, updateAddressDto: UpdateAddressDto): Promise<number[]> {
    try {
      return await this.addressRepo.update<AddressEntity>(
        { ...updateAddressDto },
        {
          where: { id }
        })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  public async remove(id: string): Promise<number> {
    try {
      return await this.addressRepo.destroy<AddressEntity>({
        where: { id }
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }
}
