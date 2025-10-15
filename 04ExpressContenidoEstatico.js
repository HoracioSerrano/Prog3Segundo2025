const express = require('express'); //npm install express
const app = express();
const port = 3000;

const path = require('node:path');

const ruta = path.resolve(__dirname, "ContenidoEstatico");//path.resolve(process.env.RUTA_CONTENTIDO_ESTATICO);

console.log(ruta);

app.use('/public', express.static(ruta));// <---express.static(ruta) http://localhost:3000/public/rancor.jpg

app.listen(port, () => {
  console.log(`Puerto ${port}`)
});

