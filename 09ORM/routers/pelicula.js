import { Router } from "express";
import {
  createdPelicula,
  getPeliculaByGenero,
} from "../controllers/peliculas.js";

const router = Router();

router.post("/", createdPelicula);
router.get("/:genero", getPeliculaByGenero);

export default router;
