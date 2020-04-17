const express = require('express');
const config = require('./config/global');
const path = require('path');
const newinvoice = require('./routes/create');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// connect database
connectDB();


//server
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//cors
app.use(cors());

//routes
app.get('/', (req, res)=>{
  res.send('hej')
});
app.use('/invoice/create', newinvoice);


//port
app.listen(config.port, console.log(`Welcome on port ${config.port}`));

