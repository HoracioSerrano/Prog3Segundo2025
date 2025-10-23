import { connection } from "../db/db.js";

// ABM

//alta

export const createdUsers = async (req, res) => {
  try {
    const { nombre, telefono } = req.body;

    const query =
      "INSERT INTO users (nombre, telefono, fecha_alta) VALUES (?,?,now())";

    const db = await connection();

    const response = await db.execute(query, [nombre, telefono]);

    await db.end();

    console.log({ response });

    const result = response[0]?.insertId;

    res.status(201).send({ userId: result });
  } catch (error) {
    res.status(404).send("Internal server error");
  }
};

//baja
export const removeUsers = async (req, res) => {
  res.status(200).send("users borrado");
};
//modificacion

export const updateUsers = async (req, res) => {
  res.status(200).send("user actualizado");
};

// find

export const getsUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM users";

    const db = await connection();

    const response = await db.query(query);

    await db.end();

    const result = response[0][0];

    res.status(200).send({ users: result });
  } catch (error) {
    console.log(error);
    res.status(404).send("Internal server error");
  }
};
