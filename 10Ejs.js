//motor de plantillas ejs
//ejemplo renderizando con llamada a ejs

const express = require('express'); 
const app = express();
const port = 3000;
const path = require('path');
const ejs = require('ejs'); //npm install ejs

app.get('/', async (req, res) => {
    const persona = {nombre:"horacio", apellido:"serrano"};

    const rutaVista = path.join(__dirname, '10vistas', 'persona.ejs');

    const html = await ejs.renderFile(rutaVista, {persona:persona});

    res.send(html);
});

app.get('/tabla', async (req, res) => {
    const personas = [
            {nombre:"horacio", apellido:"serrano", sexo:1}, 
            {nombre:"marcelo", apellido:"luque", sexo:1}, 
            {nombre:"ramiro", apellido:"escobar", sexo:1},
            {nombre:"maria", apellido:"cabral", sexo:2}
        ];

    const rutaVista = path.join(__dirname, '10vistas', 'tabla.ejs');

    const html = await ejs.renderFile(rutaVista, {personas:personas});

    res.send(html);
});

app.set('views', path.join(__dirname, '10vistas')); // o la carpeta raíz donde están las vistas
app.set('view engine', 'ejs'); //seteo como motor de renderizado


app.get('/engine', async (req, res) => {
    const personas = [
            {nombre:"horacio", apellido:"serrano", sexo:1}, 
            {nombre:"marcelo", apellido:"luque", sexo:1}, 
            {nombre:"ramiro", apellido:"escobar", sexo:1},
            {nombre:"maria", apellido:"cabral", sexo:2}
        ];

    res.render('tabla2.ejs', {personas:personas});

});



app.listen(port, () => {
    console.log(`Puerto ${port}`) //<-- http://localhost:3000 
});
