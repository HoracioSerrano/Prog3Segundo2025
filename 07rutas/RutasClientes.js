const express = require("express");
const SelectPorId = require("../07controladores/ControladorClientes")

const router = express.Router();

router.get("/clientes/error", async (req,res,next)=>{
    throw new Error("Excepcion generada en controlador");
});

router.get("/clientes/:id", async (req, res, next) => {
    SelectPorId(req,res,next);
});

router.use("/clientes",(err, req, res, next) => {
  console.log("Entre en catch del router:", err.message);
  res.status(500).send("Se ha producido un error en el servidor");
});

module.exports = router;


