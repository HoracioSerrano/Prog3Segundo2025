import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const Alquiler = sequelize.define("Alquiler", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fechaDeRetiro: { type: DataTypes.STRING, allowNull: true },
  fechaDeDevolucion: { type: DataTypes.STRING, allowNull: true },
});
