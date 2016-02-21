const express = require('express');
const mongoose = require('mongoose');
const app = module.exports = exports = express();

//Our database woop woop
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/bears_app');

const bearsRouter = require( __dirname + '/routes/bear_routes');

var PORT = 5000;

app.use(bearsRouter);
app.use(express.static( __dirname + '/build'));
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
