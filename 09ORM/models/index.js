// importar las tablas a relacionar
import { User } from "./user.js";
import { Perfil } from "./perfil.js";

// Definir Relaciones

// User y Perfil 1:1

User.hasOne(Perfil, { foreignKey: "idUser" }); //va a agregar idUser a la tabla perfil
Perfil.belongsTo(User, { foreignKey: "idUser" });

// exportar las relaciones echas

export { User, Perfil };
