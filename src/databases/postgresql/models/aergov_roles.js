'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aergov_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aergov_roles.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    role_name: DataTypes.STRING,
    permission_list: DataTypes.JSONB,
    permission_tree: DataTypes.JSONB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'aergov_roles',
    underscored: true
  });
  return aergov_roles;
};
