const Sequelize = require("sequelize");
const db=require("../configs/database");

const company = db.define('companyrecords', {
  cin: { type: Sequelize.STRING },
  company_name: { type: Sequelize.STRING },
  date_of_registration: { type: Sequelize.STRING },
  month_name: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
  roc: { type: Sequelize.STRING },
  company_status: { type: Sequelize.STRING },
  category: { type: Sequelize.STRING },
  class: { type: Sequelize.STRING },
  company_type: { type: Sequelize.STRING },
  authorized_capital: { type: Sequelize.STRING },
  paidup_capital: { type: Sequelize.STRING },
  paidup_capital: { type: Sequelize.STRING },
  activity_code: { type: Sequelize.STRING },
  activity_description: { type: Sequelize.STRING },
  registered_office_address: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

module.exports=company