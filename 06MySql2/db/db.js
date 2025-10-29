import mysql from "mysql2/promise";

export const connection = async () => {
  const db = await mysql.createConnection({
    host: 'localhost', //url para coneccion http a la base de datos
    user: 'utn_admin', //si tubiese usuario va aqui
    password: 'utn_admin123', //si tubiese contraseña va aqui
    database: 'utn_avellaneda', //nombre de la base a utilizar
  });
  return db;
};
