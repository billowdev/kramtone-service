import * as dotenv from 'dotenv';
dotenv.config();

// configuration
export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
export const SERVEPORT = process.env.PORT

// serve url
export const CLIENT_URL_DEV = process.env.CLIENT_URL_DEV
export const CLIENT_URL_DEV_2 = process.env.CLIENT_URL_DEV_2
export const CLIENT_URL_PROD = process.env.CLIENT_URL_PROD

export const DB_DATABASE_DEV = process.env.DB_DATABASE_DEV
export const DB_USERNAME_DEV = process.env.DB_USERNAME_DEV
export const DB_PASSWORD_DEV = process.env.DB_PASSWORD_DEV
export const DB_HOST_DEV = process.env.DB_HOST_DEV
export const DB_PORT_DEV = process.env.DB_PORT_DEV
export const DB_DIALECT_DEV = process.env.DB_DIALECT_DEV
export const DB_IS_FORCE_DEV = process.env.DB_IS_FORCE_DEV

export const DB_DATABASE_TEST = process.env.DB_DATABASE_TEST
export const DB_USERNAME_TEST = process.env.DB_USERNAME_TEST
export const DB_PASSWORD_TEST = process.env.DB_PASSWORD_TEST
export const DB_HOST_TEST = process.env.DB_HOST_TEST
export const DB_PORT_TEST = process.env.DB_PORT_TEST
export const DB_DIALECT_TEST = process.env.DB_DIALECT_TEST

export const DB_IS_FORCE_TEST = process.env.DB_IS_FORCE_TEST

export const DB_DATABASE_PROD = process.env.DB_DATABASE_PROD
export const DB_USERNAME_PROD = process.env.DB_USERNAME_PROD
export const DB_PASSWORD_PROD = process.env.DB_PASSWORD_PROD
export const DB_HOST_PROD = process.env.DB_HOST_PROD
export const DB_PORT_PROD = process.env.DB_PORT_PROD
export const DB_DIALECT_PROD = process.env.DB_DIALECT_PROD

export const DB_IS_FORCE_PROD = process.env.DB_IS_FORCE_PROD