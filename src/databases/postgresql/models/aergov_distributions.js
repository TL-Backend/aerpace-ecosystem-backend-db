'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_distributions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_distributions.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    region: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.JSONB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_distributions',
    underscored: true
  });
  return aergov_distributions;
};
