const mongoose = require('mongoose');
const config = require('./global')

const connectDB = async () => {
  try {
    await mongoose.connect(config.database,{
      useNewUrlParser: true, useUnifiedTopology: true,
    });
    console.log('connection with DB')

  }catch (err) {
    console.log(err.measure)
    process.exit(1)
  }
};

module.exports = connectDB;

