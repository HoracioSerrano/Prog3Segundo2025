

const express = require('express'); //npm install express
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Puerto ${port}`) //<-- http://localhost:3000 
});

