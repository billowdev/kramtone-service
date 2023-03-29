'use strict';
import { QueryInterface } from "sequelize";
import * as argon from 'argon2'
import { Role } from '../../modules/user-account/types/role.enum';

async function hashPassword(password: string) {
  const hash: string = await argon.hash(password, { type: argon.argon2id });
  return hash;
}

type UserType = {
  id: string,
  username: string,
  hash_password: string,
  email: string,
  activated: boolean,
  name: string,
  surname: string,
  phone: string,
  remove: boolean,
  role: Role,
  group_id: string,
  created_at: Date,
  updated_at: Date
}

module.exports = {
  up: async (queryInterface: QueryInterface) => {

    const userData: Array<UserType> = [
      {
        id: "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
        username: "admin",
        hash_password: await hashPassword("1234"),
        email: "admin@gmail.com",
        activated: true,
        name: "admin",
        surname: "admin",
        phone: "0987654321",
        remove: false,
        role: Role.ADMIN,
        group_id: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
        username: "user",
        hash_password: await hashPassword("1234"),
        email: "user1@gmail.com",
        activated: true,
        name: "user1",
        surname: "user1",
        phone: "0987654321",
        remove: false,
        role: Role.MEMBER,
        group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
        username: "user2",
        hash_password: await hashPassword("1234"),
        email: "user2@gmail.com",
        activated: false,
        name: "user2",
        surname: "user2",
        phone: "0987654321",
        remove: false,
        role: Role.MEMBER,
        group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]

    return queryInterface.bulkInsert('user', userData)
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('user', null, {})
  }
};
