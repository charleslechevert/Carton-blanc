const { Sequelize } = require('sequelize');

// On se connecte à notre base de donnée
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    underscored: true
  }
});

module.exports = sequelize;