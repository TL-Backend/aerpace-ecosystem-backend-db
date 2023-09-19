'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_device_import_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_device_import_histories.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    file_name: DataTypes.STRING,
    input_file: DataTypes.STRING,
    status: DataTypes.STRING,
    input_file_response: DataTypes.STRING,
    uploaded_by: DataTypes.STRING,
    uploaded_at: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_device_import_histories',
    underscored: true
  });
  return aergov_device_import_histories;
};