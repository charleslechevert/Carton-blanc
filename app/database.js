const { Sequelize } = require('sequelize');
const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env




const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }, define: {
    underscored: true
  }
   
});



module.exports = sequelize;