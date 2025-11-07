const ExcelJS = require("exceljs");

const fs = require("fs");

const generateExcel = async () => {
  // creamos el archivo
  const workbook = new ExcelJS.Workbook();

  //agregamos la hoja de calcula
  const worksheet = workbook.addWorksheet("datos");

  // definimos las columnas
  worksheet.columns = [
    {
      header: "ID",
      key: "id",
      width: 10,
    },
    {
      header: "Nombre",
      key: "nombre",
      width: 30,
    },
    {
      header: "Edad",
      key: "edad",
      width: 10,
    },
  ];

  // agregar las filas

  /*   worksheet.addRow({ id: 1, nombre: "Jhon Doe", edad: 25 });
  worksheet.addRow({ nombre: "Pepe Argento", edad: 45, id: 2 });
  worksheet.addRow({ nombre: "Moni Argento", edad: 40, id: 3 });
 */
  worksheet.addRows([
    { id: 1, nombre: "Jhon Doe", edad: 25 },
    { nombre: "Pepe Argento", edad: 45, id: 2 },
    { nombre: "Moni Argento", edad: 40, id: 3 },
  ]);

  //Guardo el archivo
  await workbook.xlsx.writeFile("./ContenidoEstatico/reporte.xlsx");

  console.log("el archivo se guardo con exito");
};

generateExcel();
