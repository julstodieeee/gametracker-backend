const Review = require('../models/Review');

// Obtener todas las reseñas
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener reseñas de un juego específico
exports.getReviewsByGame = async (req, res) => {
  try {
    const reviews = await Review.find({ juegoId: req.params.juegoId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva reseña
exports.createReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar reseña existente
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar reseña
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reseña eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
