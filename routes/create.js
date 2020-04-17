const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
  res.send('hej from invoice')
});

module.exports=  router;
