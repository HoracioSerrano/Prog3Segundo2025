//Utiliza la coneccion y estructura del ejemplo 05MySQL2.js

const express = require('express'); //npm install express
const app = express();
const port = 3000;


const routerClientes = require('./07rutas/RutasClientes')

app.use(routerClientes);

app.listen(port, () => {
  console.log(`Puerto ${port}`) //<-- http://localhost:3000 
});
