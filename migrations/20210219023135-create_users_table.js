'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("users",{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAT: Sequelize.DATE,
      updatedAT: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
  return  queryInterface.dropTable("users");
  }
};
