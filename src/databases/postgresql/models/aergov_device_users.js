'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_device_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_device_users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    device_id: DataTypes.INTEGER,
    privilege_id: DataTypes.INTEGER,
    model_id: DataTypes.STRING,
    variant_id: DataTypes.STRING,
    version_id: DataTypes.STRING,
    user_type: DataTypes.STRING,
    member_id: DataTypes.STRING,
    distribution_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_id: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_device_users',
  });
  return aergov_device_users;
};