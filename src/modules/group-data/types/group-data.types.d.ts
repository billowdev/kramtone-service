import { RequestResponseType } from "../../../common/types/response.common.types";
import { GroupDataEntity } from "../entities/group-data.entity";

export type GroupDataArrayType = GroupEntity[]
export type GetOneGroupDataResponseType = RequestResponseType<GroupDataEntity>


export type CreateGroupDataResponseType = RequestResponseType<GroupDataEntity>

export type UploadImageResponseType = RequestResponseType<UploadImageDto>

export type GetAllGroupDataResponseType = RequestResponseType<GroupDataEntity[]>
export type UpdateGroupDataResponseType = RequestResponseType<number[]>
export type DeleteGroupDataResponseType = RequestResponseType<number>
