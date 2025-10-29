import { connection } from "../db/db.js";

export async function initUsers() {
  const db = await connection();

   try {
    let qry = "drop table users";
    let resultado = await db.execute(qry);
    console.log({ resultado });
  } catch (error) {
    console.log({ error });
  }
 
  try {
    let qry =
      'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(100) NOT NULL, telefono VARCHAR(20), fecha_alta DATE);';
    let resultado = await db.execute(qry);
    console.log(resultado);
  } catch (error) {
    console.log({ error });
  }

  try {
    let qry = `insert into users(nombre, telefono, fecha_alta)values(?,?,?)`;
    let resultado = await db.execute(qry, [
      "Juan Perez",
      "741852963",
      new Date(),
    ]);
    console.log(resultado);
  } catch (error) {
    console.log({ error });
  } 

  await db.end();
}
