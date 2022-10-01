const {storeCompanyData, getCompanyData, getFilteredData}=require('../controllers/company');

const router = require('express').Router();

router.post("/company", storeCompanyData)
router.get('/company/get-company-data', getCompanyData);
router.get('/company/filter?', getFilteredData);

module.exports=router