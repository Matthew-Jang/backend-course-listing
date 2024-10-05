const { Sequelize } = require('sequelize');
require('dotenv').config();

const db_host = process.env.DB_HOST;
const db_pw = process.env.DB_PW;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;

const dbConfig = {
  HOST: db_host,
  USER: db_user,
  PASSWORD: db_pw,
  DB: db_name,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(db_name, db_user, db_pw, {
    host: db_host,
    dialect: dbConfig.dialect,
    dialectOptions: {
        allowPublicKeyRetrieval: true,
    },
    pool: dbConfig.pool,
    port: 3306,
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Export the Sequelize instance
module.exports = { sequelize, dbConfig };
