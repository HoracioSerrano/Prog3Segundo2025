import { Router } from "express";
import {
  createdAlquiler,
  getAlquileresByCodigo,
} from "../controllers/alquiler.js";

const router = Router();

router.post("/", createdAlquiler);
router.get("/:codigoCliente", getAlquileresByCodigo);

export default router;
