import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const Genero = sequelize.define("Genero", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  genero: { type: DataTypes.STRING, allowNull: true, unique: true },
});
