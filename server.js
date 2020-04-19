const express = require('express');
const config = require('./config/global');
const path = require('path');
const createinvoice = require('./routes/create');
const readinvoice = require('./routes/read');
const deleteinvoice = require('./routes/delete');
const updateinvoice = require('./routes/update');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

/**
 * connect database
 */
connectDB();
/**
 * server
 */
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
/**
* cors
*/
app.use(cors());
/**
/**
 * bodyParser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
/**
 * REST API
 */
app.use('/invoice/create', createinvoice);
app.use('/invoice/show', readinvoice);
app.use('/invoice/delete', deleteinvoice);
app.use('/invoice/update', updateinvoice);
app.get('*', (req, res)=>{
  res.send('<h1>ERROR 404 Page not found :(</h1>')
});
/**
 * port
 */
app.listen(config.port, console.log(`Welcome on port ${config.port}`));

