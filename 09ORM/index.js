import express from "express";
import { sequelize } from "./database/index.js";

import { User } from "./models/user.js";
import { Perfil } from "./models/perfil.js";
import { Pelicula } from "./models/peliculas.js";
import { Genero } from "./models/genero.js";

const app = express();
const PORT = 3000;

app.use(express.json());

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Inicializamos la base de datos");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("El servidor esta corriendo en el puerto " + PORT);
    });
  })
  .catch((error) => {
    console.log({ error });
  });
