'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aergov_device_import_histories', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      file_name: {
        type: Sequelize.STRING
      },
      input_file: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      response_file: {
        type: Sequelize.STRING
      },
      uploaded_by: {
        type: Sequelize.STRING
      },
      uploaded_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aergov_device_import_histories');
  }
};