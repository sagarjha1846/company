const express = require('express');
const db=require('./configs/database');
const router=require('./routes/companyRouter');
const cors = require("cors")
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({urlencoded:false, limit: '50mb' }));

db.authenticate().then(()=>{
  console.log("Connect to DB")
}).catch(error=>{
  console.log("Connect to DB",error)
})

app.use('/v1/api',router)

app.listen(port, () => {
  console.log('The Server is running on port', port);
});