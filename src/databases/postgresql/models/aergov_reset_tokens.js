'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_reset_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_reset_tokens.init(
    {
      uuid: DataTypes.UUID,
      user_id: DataTypes.STRING,
      status: DataTypes.STRING,
      expiry: DataTypes.DATE,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'aergov_reset_tokens',
    },
  );
  return aergov_reset_tokens;
};
