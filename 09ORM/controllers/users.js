import { User, Perfil } from "../models/index.js";

export const getsUsers = async (req, res) => {
  try {
    /*   const users = await User.findAll({ include: Perfil }); */

    const perfil = await Perfil.findOne({
      where: { codigo: 9876 },
      include: User,
    });

    res.send(perfil);
  } catch (error) {
    res.send(error);
  }
};
