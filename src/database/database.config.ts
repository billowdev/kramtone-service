import * as dotenv from 'dotenv';
import {
    DB_DATABASE_DEV, DB_DIALECT_DEV, DB_HOST_DEV, DB_PASSWORD_DEV, DB_PORT_DEV, DB_USERNAME_DEV,
    DB_DATABASE_PROD, DB_DIALECT_PROD, DB_HOST_PROD, DB_PASSWORD_PROD, DB_PORT_PROD, DB_USERNAME_PROD,
    DB_DATABASE_TEST, DB_DIALECT_TEST, DB_HOST_TEST, DB_PASSWORD_TEST, DB_PORT_TEST, DB_USERNAME_TEST
} from '../common/constants';

dotenv.config();
export interface IDatabaseConfigAttributes {
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number | string;
    dialect?: string;
    urlDatabase?: string;
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes;
    test: IDatabaseConfigAttributes;
    production: IDatabaseConfigAttributes;
}


export const dbConfig: IDatabaseConfig = {
    development: {
        username: DB_USERNAME_DEV,
        password: DB_PASSWORD_DEV,
        database: DB_DATABASE_DEV,
        host: DB_HOST_DEV,
        port: DB_PORT_DEV,
        dialect: DB_DIALECT_DEV,
    },
    test: {
        username: DB_USERNAME_TEST,
        password: DB_PASSWORD_TEST,
        database: DB_DATABASE_TEST,
        host: DB_HOST_TEST,
        port: DB_PORT_TEST,
        dialect: DB_DIALECT_TEST,
    },
    production: {
        username: DB_USERNAME_PROD,
        password: DB_PASSWORD_PROD,
        database: DB_DATABASE_PROD,
        host: DB_HOST_PROD,
        port: DB_PORT_PROD,
        dialect: DB_DIALECT_PROD,
    },
};