const express = require('express');
const app = module.exports = exports = express();

const PORT = 5000;

app.use(
  express.static(__dirname + '/build')
);
app.listen( PORT , () => {
  console.log('Server up on PORT 5000')
});
