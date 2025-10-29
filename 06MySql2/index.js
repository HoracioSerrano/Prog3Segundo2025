import express from "express";
import { initUsers } from "./models/users.js";
import router from "./routers/users.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/users", router);

app.listen(port, () => {
  console.log(`Puerto ${port}`);
  console.log("inicializar tabla users y cargar registros");
  initUsers();
});
