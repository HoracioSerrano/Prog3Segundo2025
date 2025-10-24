import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const Perfil = sequelize.define("Perfil", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
