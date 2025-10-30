import { User, Perfil } from "../models/index.js";

export const getsUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: Perfil });

    /*  const perfil = await Perfil.findOne({
      where: { codigo: 9876 },
      include: User,
    }); */

    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

export const createdUser = async (req, res) => {
  try {
    const { nombre, email, direccion, codigo } = req.body;

    const user = await User.create({ nombre, email, direccion });

    // creo perfil

    /* const perfil = await Perfil.create({codigo, idUser : user.id}) */
    await user.createPerfil({ codigo });

    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
