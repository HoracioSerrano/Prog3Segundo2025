import express from "express";
import { sequelize } from "./database/index.js";

//importar modelos

import { User, Perfil, Genero, Pelicula, Alquiler } from "./models/index.js";

//importar rutas

import usersRouter from "./routers/users.js";
import peliculasRouter from "./routers/pelicula.js";
import alquileresRouter from "./routers/alquiler.js";

const app = express();
const PORT = 3000;

app.use(express.json());

const initDDBB = async () => {
  await User.create({
    nombre: "pepe",
    email: "pepe@example.com",
    direccion: "calle falsa 123",
  });

  await User.create({
    nombre: "moni",
    email: "moni@example.com",
    direccion: "calle falsa 123",
  });

  await Perfil.create({
    codigo: 12345,
    idUser: 1,
  });

  await Perfil.create({
    codigo: 9876,
    idUser: 2,
  });

  await Pelicula.create({
    titulo: "El Padrino",
    year: 1990,
  });

  await Pelicula.create({
    titulo: "Tron",
    year: 1995,
  });

  await Genero.create({
    genero: "Terror",
  });

  await Genero.create({
    genero: "Suspenso",
  });
};

//definimos las rutas

app.use("/users", usersRouter);
app.use("/peliculas", peliculasRouter);
app.use("/alquileres", alquileresRouter);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Inicializamos la base de datos");
  })
  .then(() => {
    initDDBB();
    console.log("Cargo la DDBB");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("El servidor esta corriendo en el puerto " + PORT);
    });
  })
  .catch((error) => {
    console.log({ error });
  });
