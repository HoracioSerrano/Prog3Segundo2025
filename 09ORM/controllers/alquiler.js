import { User, Pelicula, Genero, Alquiler, Perfil } from "../models/index.js";

export const createdAlquiler = async (req, res) => {
  try {
    const { codigo, idPelicula, duracion } = req.body;

    const user = await User.findOne({
      include: [
        {
          model: Perfil,
          where: { codigo },
        },
      ],
    });

    if (!user?.id) {
      throw new Error("Usuario no existe");
    }

    const pelicula = await Pelicula.findByPk(idPelicula);

    if (!pelicula?.id) {
      throw new Error("Pelicula no existe");
    }

    let fecha = new Date();

    const fechaDeRetiro = fecha.toString();
    const fechaDeDevolucion = new Date(
      fecha.setDate(fecha.getDate() + duracion)
    ).toString();

    console.log({
      user: user.id,
      pelicula: pelicula.id,
      fechaDeDevolucion,
      fechaDeRetiro,
    });

    const alquiler = await user.addPelicula(pelicula, {
      through: {
        fechaDeRetiro,
        fechaDeDevolucion,
      },
    });

    res.send(alquiler);
  } catch (error) {
    res.send(error);
  }
};

export const getAlquileresByCodigo = async (req, res) => {
  try {
    const { codigoCliente } = req.params;

    const alquileres = await Alquiler.findAll({
      attributes: ["id", "fechaDeRetiro", "fechaDeDevolucion"],
      include: [
        {
          model: User,
          include: [
            {
              model: Perfil,
              attributes: ["id"],
              where: {
                codigo: codigoCliente,
              },
            },
          ],
        },
        {
          model: Pelicula,
          include: Genero,
        },
      ],
    });

    res.send(alquileres);
  } catch {}
};
