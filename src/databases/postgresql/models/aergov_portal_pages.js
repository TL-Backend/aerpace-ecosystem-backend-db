'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_portal_pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_portal_pages.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    identifier: DataTypes.STRING,
    route: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'aergov_portal_pages',
    underscored: true
  });
  return aergov_portal_pages;
};
