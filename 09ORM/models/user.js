import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  direccion: { type: DataTypes.STRING, allowNull: false },
});
