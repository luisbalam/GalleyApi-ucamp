/**
 * 1.- Instanciar express
 * 2.- Declarar enrutador
 * 3.- Importar controladores
 * 4.- Importamos MULTER y FS
 */

const express = require('express');
const router = express.Router();
const {
  createPhoto,
  getPhotos
} = require('../controllers/index') // No es necesario poner index porque ya está implícito.
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directory = `${__dirname}/../uploads`;

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    cb(null, directory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage });

router.post('/', upload.single('picture'), createPhoto);
router.get('/', getPhotos);

module.exports = router;

// POST /photo
// GET /photo
