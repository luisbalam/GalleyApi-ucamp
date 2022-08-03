const express = require('express');
const router = express.Router();
/* Traemos el enrutador de PHOTO */
const photoRouter = require('./Photo.router');

router.get('/', (req, res)=>{
  res.send(`
    <h1> Welcome to Gallery </h1>
  `)
});

router.use('/photo', photoRouter);

module.exports = router;
