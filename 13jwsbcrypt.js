
const ModeloUsuario = require('./13modelo/usuario.js');

//ModeloUsuario.LeerPorUsuNombre('hserrano').then(x=>console.log(x));

//ModeloUsuario.Insertar('admin2','admin2').then(x=>console.log(x));


const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


/*
enviar cookies
app.get('/login', (req, res) => {
  res.cookie('usuario', 'Horacio Serrano', {
    maxAge: 1000 * 60 * 60, // 1 hora
    httpOnly: true,          // no accesible desde JS del navegador
    secure: false,           // true si usás HTTPS
    sameSite: 'lax'          // evita algunos ataques CSRF
  });
  res.send('Cookie segura seteada!');
});

leer cookies
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/ver', (req, res) => {
  res.send(req.cookies); // muestra todas las cookies
});

*/




app.listen(port, () => {
  console.log(`Puerto ${port}`) //<-- http://localhost:3000 
});
