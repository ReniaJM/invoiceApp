const express = require('express');
const router = express.Router();
const modelInvoice = require('../models/Invoice');

/**
 *  UPDATE http://localhost:3000/invoice/update/invoiceID
 */
router.put('/:invoiceID', (req, res) => {
  modelInvoice.updateOne({
    _id: req.params.invoiceID
  },{
    seller:req.body.seller,
    seller_address: req.body.seller_address,
    customer: req.body.customer,
    customer_address: req.body.customer_address,
    products: req.body.products,
    sumOfProducts: req.body.sumOfProducts,
    infoInvoice: req.body.infoInvoice,
  }, (error, data)=>{
    if(error){
      console.log("Houston we have a problem!", error);
      res.status(500).json({message:"Houston we have a problem!"})
    }
    console.log("Great job!");
    // res.status(200).json({message:"Great job! - update invoice"})
    res.status(200).json(data)
  })
});

module.exports=  router;


