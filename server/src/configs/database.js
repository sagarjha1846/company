const Sequelize = require('Sequelize');

const db = new Sequelize('company', 'postgres', 'admin', {
  host: 'localhost',
  dialect:  'postgres' 
});

module.exports=db