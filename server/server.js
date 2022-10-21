const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server started in ${PORT} port`);
});
