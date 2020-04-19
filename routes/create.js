const express = require('express');
const router = express.Router();
const modelInvoice = require('../models/Invoice');

/**
 *  POST http://localhost:5000/invoice/create
 */
router.post('/', (req, res) => {
  const creteInvoice = new  modelInvoice({
    seller:req.body.seller,
    seller_address: req.body.seller_address,
    customer: req.body.customer,
    customer_address: req.body.customer_address,
    products: req.body.products,
    sumOfProducts: req.body.sumOfProducts,
    infoInvoice: req.body.infoInvoice,
  });
  creteInvoice.save((error, data)=>{
    if(error){
      console.log("Houston we have a problem!", error);
      res.status(500).json({message:"Houston we have a problem!"})
    }
    console.log("Great job!")
    res.status(200).json(data)
  });

});

module.exports=  router;
