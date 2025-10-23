const express = require("express");
const SelectPorId = require("../07controladores/ControladorClientes")

const router = express.Router();

router.get("/clientes/:id", (req, res, next) => {
    SelectPorId(req,res,next);
});


module.exports = router;


