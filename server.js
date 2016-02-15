const express = require('express');
var app = express();
var PORT = 5000;

app.use(express.static( __dirname + '/app'))
.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})
