import { RequestResponseType } from "../../../common/types/response.common.types";
import { AddressEntity } from "../entities/address.entity";

export type AddressArrayType = AddressEntity[]
export type GetOneAddressResponseType = RequestResponseType<AddressEntity>
export type CreateAddressResponseType = RequestResponseType<AddressEntity>
export type UpdateAddressResponseType = RequestResponseType<number[]>
export type DeleteAddressResponseType = RequestResponseType<number>
