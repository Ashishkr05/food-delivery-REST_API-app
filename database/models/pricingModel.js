const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Pricing = sequelize.define('Pricing', {
  zone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  km_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fix_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

module.exports = Pricing;
