const { Sequelize } = require('sequelize');
//const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env




const sequelize = new Sequelize('d158ribaq37km9', 'qyhofagirwgfvs', '0b1fcce62a73b6c3e3c27cb8b93327560ebb8641d10cca45aa18c7a8ceb3da40', {
  host: 'ec2-176-34-215-248.eu-west-1.compute.amazonaws.com',
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