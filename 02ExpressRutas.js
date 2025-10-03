const express = require("express");

let users = [
  { id: 1, name: "Jhon Doe", edad: "25" },
  { id: 2, name: "Marta Ramos", edad: "21" },
  { id: 3, name: "Freddy Doe", edad: "27" },
  { id: 4, name: "Maxi Perez", edad: "25" },
];

const port = 3002;

const app = express();
app.use(express.json());//<<<<<<<<<< para parsear body

// Listado
// Con Query 
app.get("/users", (req, res) => {
  // Query
  const query = req.query;

  let usersRes = users;
  // Filtrar por edad http://localhost:3002/users?edad=x
  if (query.edad) {
    usersRes = usersRes.filter((user) => user.edad === query.edad);
  }
  // filtrar por nombre
  if (query.name) {  http://localhost:3002/users?name=x
    usersRes = usersRes.filter((user) =>
      user.name.toLowerCase().includes(query.name.toLowerCase())
    );
  }

  res.send(usersRes);
});

// Listado por ID
// Por Parametro
app.get("/users/:id", (req, res) => {
  // obtener el id
  const { id } = req.params;

  // filtrado de los usuarios por id

  const user = users.find((e) => e.id == id);

  if (user) {
    res.send(user);
  }
  if (!user) {
    res.send({});
  }
});

// Alta
// Por Body
app.post("/users", (req, res) => {
  // obtener el body
  const { body } = req;

  const newUser = { ...body, id: users.length + 1 };

  //agregar a la lista de users

  users.push(newUser);

  // respuesta

  res.send(newUser);
});

// Baja

app.delete("/users/:id", (req, res) => {
  // obtener el id
  const { id } = req.params;

  // obtener el usuario
  const user = users.find((user) => user.id == id);

  if (!user) {
    res.send({ message: "User no existe" });
  }
  //array.splice(posicion, 1)

  const indexUser = users.findIndex((user) => user.id == id);

  console.log(indexUser);

  users.splice(indexUser, 1);

  res.send({ message: "User borrado" });
});

// Actualizacion
app.put("/users/:id", (req, res) => {
  // obtener el body
  const {
    body,
    params: { id },
  } = req;

  // obtener el usuario
  const user = users.find((user) => user.id == id);

  if (!user) {
    res.send({ message: "User no existe" });
  }

  // actualizar la lista

  const newUser = { ...body, id };

  const indexUser = users.findIndex((user) => user.id == id);
  users.splice(indexUser, 1);

  users.push(newUser);
  // responder la peticion

  res.send(newUser);
});

app.all('/todos', (req, res)=>{res.send("Vale para todos")});




app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
