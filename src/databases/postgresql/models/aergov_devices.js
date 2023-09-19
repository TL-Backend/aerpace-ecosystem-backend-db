'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_devices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_devices.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    member_id: DataTypes.STRING,
    registration_number: DataTypes.STRING,
    model_id: DataTypes.STRING,
    variant_id: DataTypes.STRING,
    version_id: DataTypes.STRING,
    distribution_id: DataTypes.STRING,
    mac_number: DataTypes.STRING,
    color: DataTypes.STRING,
    device_type: DataTypes.STRING,
    source_file_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_devices',
    underscored: true
  });
  return aergov_devices;
};