const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Organization = sequelize.define('Organization', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Organization;
