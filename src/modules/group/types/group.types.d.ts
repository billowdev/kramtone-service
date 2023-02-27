import { RequestResponseType } from "../../../common/types/response.common.types";
import { GroupEntity } from "../entities/group.entity";

export type GroupArrayType = GroupEntity[]
export type GetOneGroupResponseType = RequestResponseType<GroupEntity>


export type CreateGroupResponseType = RequestResponseType<GroupEntity>

export type UploadImageResponseType = RequestResponseType<UploadImageDto>

export type GetAllGroupResponseType = RequestResponseType<GroupEntity[]>
export type UpdateGroupResponseType = RequestResponseType<number[]>
export type DeleteGroupResponseType = RequestResponseType<number>
