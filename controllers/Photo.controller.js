/**
 * 1.- Instanciamos mongoose
 * 2.- Instanciamos modelo de mongoose
 */

const mongoose = require('mongoose');
/* Debe coincidir con el nombre del modelo (primer parámetro de [mongoose.model('Photo', PhotoSchema, 'photo');]) */
const Photo = mongoose.model('Photo');

const createPhoto = (req, res) => {
  // '/update/:reg' req.params.reg
  // OJO: Esta es la url de la petición localhost:3000/update?string='hola' req.query.string 
  // La ruta sería '/update'
  const photo = new Photo({ ...req.body, uri: req.file.originalname });
  console.log(photo)
  /**
   * {
      title: 'Hola',
      description: 'Desc',
      uri: '/photo.jpg',
     }
   */

  //Guardar con promise
  photo.save().then((photo) => {
    return res.status(200).json({
      message: 'OK',
      detail: photo
    });
  }).catch(err => {
    return res.status(400).json({
      message: 'Error',
      detail: err
    });
  })
}

const getPhotos = async (req, res) => {
  //Get con async/await
  try {
    const photos = await Photo.find();
    if (photos.length === 0) {
      return res.status(400).json({
        message: 'Error',
        detail: 'No hay registros'
      });
    }
    return res.status(200).json({
      message: 'OK',
      detail: photos
    });

  } catch (err) {
    return res.status(400).json({
      message: 'Error',
      detail: err
    });
  }
}

module.exports = {
  createPhoto,
  getPhotos
}