const mongoose = require('mongoose');

// Definir el esquema
const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  }
});

// Crear y exportar el modelo
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;