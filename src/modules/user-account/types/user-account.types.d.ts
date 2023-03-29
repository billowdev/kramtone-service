import { RequestResponseType } from "../../../common/types/response.common.types";
import { UserEntity } from "../entities/user.entity";

export type UserArrayType = UserEntity[]
export type GetOneUserResponseType = RequestResponseType<UserEntity>


export type CreateUserResponseType = RequestResponseType<UserEntity>

export type UploadImageResponseType = RequestResponseType<UploadImageDto>

export type GetAllUserResponseType = RequestResponseType<UserEntity[]>
export type UpdateUserResponseType = RequestResponseType<number[]>
export type DeleteUserResponseType = RequestResponseType<number>
