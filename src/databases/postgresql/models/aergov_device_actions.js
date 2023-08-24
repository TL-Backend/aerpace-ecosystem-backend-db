'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_device_actions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_device_actions.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      action_id: DataTypes.INTEGER,
      model_id: DataTypes.STRING,
      variant_id: DataTypes.STRING,
      version_id: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      device_type: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'aergov_device_actions',
    },
  );
  return aergov_device_actions;
};
