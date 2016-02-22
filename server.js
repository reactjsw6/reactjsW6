const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');

const bearsRouter = require(__dirname + '/lib/bear_routes_3000');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/bears_app_dev');

const PORT = 5000;

app.use(
  express.static(__dirname + '/build')
);

app.use('/api', bearsRouter);

app.listen( PORT , () => {
  console.log('Server up on PORT 5000')
});
