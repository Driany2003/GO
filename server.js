const express = require('express');
const path = require('path');
const app = express();

// Sirve archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname, '')));

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
