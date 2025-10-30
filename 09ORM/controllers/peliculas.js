import { Genero, Pelicula } from "../models/index.js";

export const createdPelicula = async (req, res) => {
  try {
    const { titulo, year, genero } = req.body;
    //genero = "terror"

    console.log({ titulo, year, genero });

    const pelicula = await Pelicula.create({ titulo, year });

    console.log({ pelicula });

    // buscar si existe mi genero

    const existGenero = await Genero.findOne({ where: { genero } });

    console.log({ existGenero });

    if (existGenero?.id) {
      // si existe asigno el genero a la pelicula
      await existGenero.addPelicula(pelicula);
      //await pelicula.addGenero(existGenero);
    } else {
      // creo el genero y asigno

      const newGenero = await Genero.create({ genero });

      await newGenero.addPelicula(pelicula);
    }

    res.send(pelicula);
  } catch (error) {
    res.send(error);
  }
};

export const getPeliculaByGenero = async (req, res) => {
  try {
    const { genero } = req.params;

    const peliculas = await Pelicula.findAll({
      include: [
        {
          model: Genero,
          where: { genero: genero },
        },
      ],
    });

    res.send(peliculas);
  } catch (error) {
    res.send(error);
  }
};
