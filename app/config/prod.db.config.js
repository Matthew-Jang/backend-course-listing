const { Sequelize } = require('sequelize');
require('dotenv').config();

const db_host = process.env.DB_HOST;
const db_pw = process.env.DB_PW;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;

module.exports = {
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

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PW, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        allowPublicKeyRetrieval: true,
    },
    pool: dbConfig.pool,
    port: 3307,
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
module.exports = sequelize;