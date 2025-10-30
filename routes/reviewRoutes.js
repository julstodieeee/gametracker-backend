const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Rutas para las reseñas
router.get('/', reviewController.getAllReviews);
router.get('/juego/:juegoId', reviewController.getReviewsByGame);
router.post('/', reviewController.createReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
