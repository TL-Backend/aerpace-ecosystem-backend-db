'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aergov_category_features', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      version_id: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      feature_name: {
        type: Sequelize.STRING
      },
      feature: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aergov_category_features');
  }
};