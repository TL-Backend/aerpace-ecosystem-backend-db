"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class aergov_mobile_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_mobile_tokens.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      token: DataTypes.STRING,
      user_id: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "aergov_mobile_tokens",
      underscored: true,
    }
  );
  return aergov_mobile_tokens;
};
