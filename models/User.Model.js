const Sequelize = require('sequelize');

module.exports = sequelize.define("User", {
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
});
