const SelectId = require('../07modelo/ModeloClientes');

async function SelectPorId(req, res, next) {
    const { id } = req.params;
 
    let result = await SelectId(id);

    res.send(JSON.stringify(result));

}

module.exports = SelectPorId;
