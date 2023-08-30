'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_device_models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_device_models.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    device_type: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_device_models',
    underscored: true
  });
  return aergov_device_models;
};