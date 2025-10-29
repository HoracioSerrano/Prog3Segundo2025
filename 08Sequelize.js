import express from "express";
import { Sequelize, DataTypes } from "sequelize";

const app = express();
const PORT = 3000;

app.use(express.json());

// Conexion con la ddbb
                                   //Data base.    User           Contraseña
const sequelize = new Sequelize("utn_avellaneda", "utn_admin", "utn_admin123", {
  host: "localhost",
  dialect: "mysql", // tipo de data base
});

// Modelos. -> clases que se traducen a las tablas de la ddbb

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: { type: DataTypes.INTEGER, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

//Crear rutas

//todos los usuarios
app.get("/", async (req, res) => {
  try {
    const users = await User.findAll({});

    res.send(users);
  } catch (error) {
    console.log({ error });
  }
});

app.post("/", async (req, res) => {
  try {
    const body = req.body;

    const { name, email, edad } = body;

    const user = await User.create({ name, email, edad });

    res.send(user);
  } catch (error) {
    res.send("error");
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    console.log(user, id);

    res.send(user);
  } catch (error) {
    console.log({ error });
  }
});

//Se conecta el servidor o servicio

sequelize
  .sync({ force: true }) // force -> true/false   alter -> true/false
  .then(() => {
    console.log("Conectando a la data base");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("El servidor esta corriendo en el puerto " + PORT);
    });
  })
  .catch((error) => console.log({ error }));
