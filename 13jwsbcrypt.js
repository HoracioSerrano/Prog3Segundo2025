
const ModeloUsuario = require('./13modelo/usuario.js');

//ModeloUsuario.LeerPorUsuNombre('hserrano').then(x=>console.log(x));

//ModeloUsuario.Insertar('admin2','admin2').then(x=>console.log(x));


const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());




app.listen(port, () => {
  console.log(`Puerto ${port}`) //<-- http://localhost:3000 
});
