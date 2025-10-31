const crearConeccion = require('./db');

class ModeloUsuario{
    static async LeerPorUsuNombre(usuNombre){
        let db = await crearConeccion();

        let res = await db.execute('select * from Usuario where UsuNombre = ?', [usuNombre]);

        console.log(res);

        await db.end();

        return res[0][0];
    }

    static async Insertar(usuNombre, usuPassword){
        let db = await crearConeccion();

        let res = await db.execute('insert into Usuario(UsuNombre, UsuPassword) values (?,?)', [usuNombre, usuPassword]);

        await db.end();

        return res[0].insertId;
    }
}

module.exports = ModeloUsuario;