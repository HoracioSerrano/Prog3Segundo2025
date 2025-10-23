const mysql = require('mysql2/promise')

async function SelectId(id) {
    const db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'dbprueba'
    });

    let res = await db.execute('select * from clientes where id=?', [id]);

    await db.end();

    return res[0][0];
}


module.exports = SelectId;