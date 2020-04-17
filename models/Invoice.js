const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  seller:{
    type: String,
    required: true,
  },
  seller_address:{
    type: String,
    required: true,
  },
  customer:{
    type: String,
    required: true,
  },
  customer_address:{
    type: String,
    required: true,
  },
  date:{
    type: Date,
    default: Date.now,
  },
  products:[
    {
      name:{
        type: String,
        required: true,
      },
      price:{
        type: Number,
        required: true,
      }
    }
  ],
  sumOfProducts:{
    type: Number,
    required: true,
  },
  infoInvoice:{
    type: String,
    required: true,
  }
});

module.exports = Invoice = mongoose.model("Invoice", InvoiceSchema);
