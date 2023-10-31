const Quiz = require('../models/quizModel');

const createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the quiz.' });
  }
};
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the quizzes.' });
  }
};
const getQuizById = async (req, res) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the quiz.' });
  }
};
const updateQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    const updatedQuizData = req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, updatedQuizData, {
      new: true,
    });

    if (!updatedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the quiz.' });
  }
};
const deleteQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    const deletedQuiz = await Quiz.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the quiz.' });
  }
};

module.exports = {
  createQuiz,
  getQuizById,
  getAllQuizzes,
  updateQuiz,
  deleteQuiz,
};
