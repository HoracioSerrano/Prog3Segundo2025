// importar las tablas a relacionar
import { User } from "./user.js";
import { Perfil } from "./perfil.js";
import { Pelicula } from "./peliculas.js";
import { Genero } from "./genero.js";
import { Alquiler } from "./alquiler.js";

// Definir Relaciones

// User y Perfil 1:1

User.hasOne(Perfil, { foreignKey: "idUser" }); //va a agregar idUser a la tabla perfil
Perfil.belongsTo(User, { foreignKey: "idUser" });

// Pelicula y Genero N:1

// una pelicula puede tener un solo genero y los generos tener muchas peliculas

Genero.hasMany(Pelicula, { foreignKey: "generoId" });
Pelicula.belongsTo(Genero, { foreignKey: "generoId" });

// Peliculas y Users se relacion N:M a travez de alquiler

Pelicula.belongsToMany(User, { through: "Alquiler" });
User.belongsToMany(Pelicula, { through: "Alquiler" });

User.hasMany(Alquiler);
Alquiler.belongsTo(User);

Pelicula.hasMany(Alquiler);
Alquiler.belongsTo(Pelicula);

export { User, Perfil, Genero, Pelicula, Alquiler };
