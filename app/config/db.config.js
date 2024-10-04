const { Sequelize } = require('sequelize');

const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'course',
  dialect: 'mariadb',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.PW, {
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