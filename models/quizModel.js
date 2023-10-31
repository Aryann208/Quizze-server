const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
  id: Number,
  choice: String,
  isCorrect: Boolean,
  userSelection: Number,
  choiceText: String,
  choiceUrl: String,
});

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  timer: Number,
  quizType: String,
  choices: [choiceSchema],
});

const quizSchema = new mongoose.Schema({
  quizName: String,
  quizType: String,
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quiz', quizSchema);
