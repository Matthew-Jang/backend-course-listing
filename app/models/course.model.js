const sequelize = require('../config/db.config'); // Adjust path as needed
const { DataTypes } = require('sequelize');

const Course = sequelize.define('Course', {
  dept: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_number: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  Level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Hours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
    timestamps: false
});

// Sync the model with the database (only do this once, or in a migration)
Course.sync();

module.exports = Course;
