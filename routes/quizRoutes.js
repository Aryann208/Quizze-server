const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/:id', quizController.getQuizById);

router.get('/', authenticateToken, quizController.getAllQuizzes);

router.post('/create', authenticateToken, quizController.createQuiz);
router.put('/:id', authenticateToken, quizController.updateQuiz);
router.delete('/:id', authenticateToken, quizController.deleteQuiz);

module.exports = router;
