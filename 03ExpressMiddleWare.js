
const express = require('express'); //npm install express
const app = express();
const port = 3000;

//3 middlewares al mismo destino http://localhost:3000/user
app.use('/user',(req,res,next)=>{
    res.comentario = "Middleware User";
    next();
});

app.use('/user',(req,res,next)=>{
    res.comentario += " Segundo Middleware ";
    next();
});

app.get('/user', (req, res) => {
  res.send(res.comentario + "get /user");
});

app.get('/user/miuser', (req, res) => {
  res.send(res.comentario + "get /user");
});

//Ruta sin middleware
app.get('/admin', (req, res) => {
    if(!res.comentario){
        res.comentario = "sin Middleware"
    }
    res.send(res.comentario + "get /user");
});

//Middleware terminador
app.use('/privado',(req,res,next)=>{
    let bloquear = true;
    if(bloquear){
        res.send("Bloqueado");
    }else{
        next();
    }
});

//Ruta sin middleware
app.get('/privado', (req, res) => {
    res.send("Dentro de Privado");
});

app.listen(port, () => {
  console.log(`Puerto ${port}`) //<-- http://localhost:3000 
});
