const express = require('express');
const router = express.Router();
const modelInvoice = require('../models/Invoice');

/**
 *  DELETE http://localhost:3000/invoice/delete/invoiceID
 */
router.delete('/:invoiceID', (req, res) => {
  modelInvoice.deleteOne({
    _id: req.params.invoiceID
  }, (error)=>{
      if(error){
        console.log("Houston we have a problem!", error);
        res.status(500).json({message:"Houston we have a problem!"})
      }
      console.log("Great job!");
      res.status(200).json({message:"Great job! - delete invoice"})
    })
});

module.exports=  router;


