'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const createFunctionQuery = `
    CREATE OR REPLACE FUNCTION aergov_users_set_id_function()
    RETURNS TRIGGER AS
    $$
    BEGIN
        IF NEW.id IS NULL THEN
            NEW.id = 'u_' || nextval('aergov_users_id_seq');
        ELSE
            NEW.id = 'u_' || NEW.id;
        END IF;
        RETURN NEW;
    END;
    $$
    LANGUAGE plpgsql;
    `;


    await queryInterface.sequelize.query(createFunctionQuery);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {


    const dropFunctionQuery = `
      DROP FUNCTION IF EXISTS aergov_users_set_id_function();
    `;

    await queryInterface.sequelize.query(dropFunctionQuery);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
