//npm install mysql2
const mysql = require('mysql2/promise')

async function inicializarBaseDeDatos() {
    const db = await mysql.createConnection({
        host:'localhost', //url para coneccion http a la base de datos
        user:'root',//si tubiese usuario va aqui
        password:'',//si tubiese contraseña va aqui
        database:'dbprueba'//nombre de la base a utilizar
    });

    try{
        let qry = 'drop table clientes';
        let resultado = await db.execute(qry);
        console.log(resultado);
    }catch{}

    try{
        let qry = 'CREATE TABLE clientes (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(100) NOT NULL, telefono VARCHAR(20), fecha_alta DATE DEFAULT CURRENT_DATE);';
        let resultado = await db.execute(qry);
        console.log(resultado);
    }catch{}

    try{
        let qry = `insert into clientes(nombre, telefono, fecha_alta)values(?,?,?)`;
        let resultado = await db.execute(qry,['Juan Perez', '741852963', '2025-05-20']);
        console.log(resultado);
    }catch{}

    await db.end();
}

//inicializarBaseDeDatos();


async function select() {
    const db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'dbprueba'
    });

    let res = await db.execute('select * from clientes');

    console.log(res);

    await db.end();
}

//select();


async function update() {
    const db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'dbprueba'
    });

    let res = await db.execute('update clientes set nombre = ? where id= ? ', ['PrezJuan',1]);

    console.log(res);

    await db.end();
}

//update();



//controller
app.post('/insertarUsuario',async (req,res,next)=>{
    let body = req.body;
    await InsertarCliente(body.nombre, body.telefono);
});

//modelo
async function InsertarCliente(nombre,telefono){
        const db = await mysql.createConnection({
        host:'localhost', //url para coneccion http a la base de datos
        user:'root',//si tubiese usuario va aqui
        password:'',//si tubiese contraseña va aqui
        database:'dbprueba'//nombre de la base a utilizar
    });
    let qry = `insert into clientes(nombre, telefono, fecha_alta)values(?,?,?)`;
    let resultado = await db.execute(qry,['Juan Perez', '741852963', new Date()]);
    await db.end();
}
