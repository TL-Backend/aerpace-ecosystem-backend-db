'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aergov_device_users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      device_id: {
        type: Sequelize.INTEGER,
      },
      privilege_id: {
        type: Sequelize.INTEGER,
      },
      model_id: {
        type: Sequelize.STRING,
      },
      variant_id: {
        type: Sequelize.STRING,
      },
      version_id: {
        type: Sequelize.STRING,
      },
      user_type: {
        type: Sequelize.STRING,
      },
      member_id: {
        type: Sequelize.STRING,
      },
      distribution_id: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_id: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aergov_device_users');
  },
};
