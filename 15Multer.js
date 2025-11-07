const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();
const port = 3000;

app.use("/public", express.static("public"));

const upload = multer({
  dest: "public/uploads/",
});

app.use(express.json());

const saveArchivo = (file) => {
  let ext = "";

  if (file.mimetype === "image/jpeg") {
    ext = "jpeg";
  }
  if (file.mimetype === "image/png") {
    ext = "png";
  }

  const originalname = file.originalname.split(".")[0].replace(/\s/g, "-");

  const newPath = `public/uploads/${originalname}_${Date.now()}.${ext}`;

  fs.renameSync(file.path, newPath);

  return `http://localhost:3000/${newPath}`;
};

app.post("/uploads/single", upload.single("archivo"), (req, res) => {
  const file = req.file;
  console.log(file);

  const newPath = saveArchivo(file);

  res.send({ url: newPath });
});

app.post("/uploads/multi", upload.array("archivo", 3), (req, res) => {
  const files = req.files;
  console.log(files);

  // files.map(file => saveArchivo(file))
  const newPath = files.map(saveArchivo);

  res.send({ urls: newPath });
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});

/* const product = {
    name: "coca",
    price: 3000,
    img: ""
} */
