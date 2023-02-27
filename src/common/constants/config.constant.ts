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

export const DB_DATABASE = process.env.DB_DATABASE
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_DIALECT = process.env.DB_DIALECT
