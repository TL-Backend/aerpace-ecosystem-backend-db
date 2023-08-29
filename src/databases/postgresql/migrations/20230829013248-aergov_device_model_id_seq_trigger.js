'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addTriggerQuery = `
    CREATE TRIGGER aergov_models_id_seq_trigger
    BEFORE INSERT ON aergov_device_models
    FOR EACH ROW
    EXECUTE FUNCTION aergov_device_models_set_id_function();
    `;

    await queryInterface.sequelize.query(addTriggerQuery);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    const dropTriggerQuery = `
      DROP TRIGGER IF EXISTS aergov_models_id_seq_trigger ON aergov_device_models;
    `;

    await queryInterface.sequelize.query(dropTriggerQuery);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
