'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_device_model_privilages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_device_model_privilages.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    model_id: DataTypes.STRING,
    variant_id: DataTypes.STRING,
    version_id: DataTypes.STRING,
    user_type: DataTypes.STRING,
    privileges: DataTypes.JSONB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_device_model_privileges',
  });
  return aergov_device_model_privilages;
};