const db=require("../configs/database");
const company = require('../models/Company');

const storeCompanyData =(req,res)=>{

  company
    .bulkCreate(req.body)
    .then((company) => {
      res.status(200).json({message:"Company Data Uploaded"});
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  
}

const getCompanyData = (req, res) => {
  company
    .findAll()
    .then((companies) => {
      console.log(companies);
      res.status(200).json(companies);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFilteredData = (req, res) => {
  company
    .findAll()
    .then((companies) => {
      console.log(companies);
      res.status(200).json(companies);
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = {
  storeCompanyData,
  getCompanyData,
  getFilteredData,
};