const dotenv = require('dotenv');

dotenv.config();

const devUsername = process.env.DEV_DATABASE_USERNAME;
const devPassword = process.env.DEV_DATABASE_PASSWORD;
const devDatabase = process.env.DEV_DATABASE_NAME;
const testUsername = process.env.TEST_DATABASE_USERNAME;
const testPassword = process.env.TEST_DATABASE_PASSWORD;
const testDatabase = process.env.TEST_DATABASE_NAME;

const config = {
  development: {
    username: devUsername,
    password: devPassword,
    database: devDatabase,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: testUsername,
    password: testPassword,
    database: testDatabase,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

module.exports = config;
