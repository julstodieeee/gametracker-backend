// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Crear la app de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas básicas (por ahora una de prueba)
app.get('/', (req, res) => {
  res.send('🎮 Bienvenido a GameTracker API');
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
