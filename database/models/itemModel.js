const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Item = sequelize.define('Item', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Item;
