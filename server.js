const express = require('express');
const config = require('./config/global');
const path = require('path');
const newinvoice = require('./routes/create');

//server
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

//routes
app.get('/', (req, res)=>{
  res.send('hej')
});
app.use('/invoice/create', newinvoice);


//port
app.listen(config.port, console.log(`Welcome on port ${config.port}`));

