const { Sequelize } = require('sequelize');
const { prototype } = require('./models/penalty');
//const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env

//If is here to connect to local if STATE is dev or directly on the DB on prod if we connect directly online (not in local)

if(process.env.STATE == 'dev') {
  const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
      underscored: true
    }
  });
  module.exports = sequelize;
} else {
  const sequelize = new Sequelize('d158ribaq37km9', 'qyhofagirwgfvs', '0b1fcce62a73b6c3e3c27cb8b93327560ebb8641d10cca45aa18c7a8ceb3da40', {
    host: 'ec2-176-34-215-248.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }, define: {
      underscored: true
    }
    
  });
  module.exports = sequelize;

}




