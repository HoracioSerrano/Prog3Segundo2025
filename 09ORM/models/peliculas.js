import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const Pelicula = sequelize.define("Pelicula", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING, allowNull: true },
  year: { type: DataTypes.INTEGER, allowNull: true },
});
