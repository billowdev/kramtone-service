import { Optional } from "@nestjs/common";
import { Role } from '../../../modules/auth/entities/role.enum';

export type UserAttributes = {
	id: string,
	username: string,
	hashPassword: string,
	activated: boolean,
	role: Role,
	name: string,
	surname: string,
	phone: string,
	email: string,
	remove: boolean,
	groupId: string,
	createdAt: Date,
	updatedAt: Date
}
export type UserCreationAttributes = Optional<
	UserAttributes,
	'id' | 'createdAt' | 'updatedAt' | 'groupId'
>;
