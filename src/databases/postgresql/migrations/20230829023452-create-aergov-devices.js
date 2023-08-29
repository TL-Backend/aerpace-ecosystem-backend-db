'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aergov_devices', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      name: {
        type: Sequelize.STRING
      },
      member_id: {
        type: Sequelize.STRING
      },
      registration_number: {
        type: Sequelize.STRING
      },
      model_id: {
        type: Sequelize.STRING
      },
      variant_id: {
        type: Sequelize.STRING
      },
      version_id: {
        type: Sequelize.STRING
      },
      distributor_id: {
        type: Sequelize.STRING
      },
      mac_number: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      device_type: {
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
    await queryInterface.dropTable('aergov_devices');
  }
};