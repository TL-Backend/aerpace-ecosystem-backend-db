'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aergov_device_model_privileges', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique: true,
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
      privileges: {
        type: Sequelize.JSONB,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aergov_device_model_privileges');
  },
};
