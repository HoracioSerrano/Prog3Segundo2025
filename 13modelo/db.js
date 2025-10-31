const mysql = require('mysql2/promise')

async function crearConeccion() {
    const db = await mysql.createConnection({
        host:'localhost', //url para coneccion http a la base de datos
        user:'root',//si tubiese usuario va aqui
        password:'',//si tubiese contraseña va aqui
        database:'dbprueba'//nombre de la base a utilizar
    });

    return db;
}

module.exports = crearConeccion;