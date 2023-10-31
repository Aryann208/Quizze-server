const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
console.log('process.env.MONGODB_URL', process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const quizRoutes = require('./routes/quizRoutes');
const auth = require('./routes/auth');
const path = require('path');

// Serve static assets
app.use(express.static(path.join(__dirname, 'build')));

// Health
app.get('/health', (req, res) => {
  res.json({ status: 'Server is healthy' });
});

// Authentication Routes
app.use('/api/auth', auth);

// Quiz Routes
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
