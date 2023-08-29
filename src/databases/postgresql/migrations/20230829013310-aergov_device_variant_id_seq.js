'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createSequel = `
    CREATE SEQUENCE aergov_device_variants_id_seq;
    `;

    await queryInterface.sequelize.query(createSequel);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    const dropSequel = `
    DROP SEQUENCE IF EXISTS aergov_device_variants_id_seq;
    `;

    queryInterface.sequelize.query(dropSequel);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
