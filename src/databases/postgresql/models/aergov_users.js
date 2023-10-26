"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class aergov_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_users.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      country_code: DataTypes.STRING,
      distribution_id: DataTypes.STRING,
      password: DataTypes.STRING,
      profile_url: DataTypes.STRING,
      user_type: DataTypes.STRING,
      address: DataTypes.STRING,
      state: DataTypes.STRING,
      pin_code: DataTypes.STRING,
      first_time_login: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      language: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "aergov_users",
      underscored: true,
    }
  );
  return aergov_users;
};
