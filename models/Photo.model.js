/* Instanciar mongoose */
const mongoose = require('mongoose');

/* Creamos el esquema de la colección */
const PhotoSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    uri: { type: String },
  }
);

/* Referenciar a la base de datos */
// mongoose.model(nombre del modelo, esquema, nombre de la colección)
mongoose.model('Photo', PhotoSchema, 'photo');
