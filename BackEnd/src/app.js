const express = require('express');
const mongoose = require('mongoose');
const aiRoutes = require('./routes/ai.routes');
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/code-review', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);
app.use('/auth', authRoutes);

module.exports = app;