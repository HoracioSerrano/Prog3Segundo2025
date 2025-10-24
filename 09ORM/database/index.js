import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "utn_avellaneda",
  "utn_admin",
  "utn_admin123",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
