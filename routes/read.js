const express = require('express');
const router = express.Router();
const modelInvoice = require('../models/Invoice');


router.get('/', (req, res) => {
 modelInvoice.find((error,data )=>{
  if(error){
   console.log("Houston we have a problem!", error)
   res.status(500).json({message:"Houston we have a problem!"})
  }
  console.log("Great job!")
  res.status(200).json(data)
 });


});

module.exports =  router;
