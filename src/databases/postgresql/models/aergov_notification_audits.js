"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class aergov_notification_audits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_notification_audits.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      channel: DataTypes.STRING,
      contact_details: DataTypes.JSONB,
      status: DataTypes.STRING,
      success_response: DataTypes.JSONB,
      error_response: DataTypes.JSONB,
      dynamic_content: DataTypes.JSONB,
      user_id: DataTypes.STRING,
      group_id: DataTypes.STRING,
      notification_type: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "aergov_notification_audits",
      underscored: true,
    }
  );
  return aergov_notification_audits;
};
