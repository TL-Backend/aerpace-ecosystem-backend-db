"use strict";
const { dbTables } = require("../../../commons/constant");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(dbTables.USERS_TABLE, "language", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(dbTables.USERS_TABLE, "language");
  },
};
