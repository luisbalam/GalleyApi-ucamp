/* Importamos e instanciamos los modelos y bibliotecas */
require('dotenv').config();
require('./models');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

/* Inicializamos express */
const app = express();

/* Agregamos los middlewares */
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/uploads`));

/* Conectar la base de datos */
mongoose.connect(process.env.MONGO_URI);

/* Definimos rutas */
app.use('/', routes);

/* Iniciamos Servidor */
app.listen(process.env.PORT, () =>{
  console.log('Servidor iniciado', process.env.PORT);
});
