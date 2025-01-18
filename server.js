const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const { connectDb } = require('./config/mongoDbConfig');
const errorMiddleware = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Error Handler
app.use(errorMiddleware);

// Connect to Database and Start Server
const PORT = process.env.PORT || 3000;
(async () => {
    try {
        await connectDb();
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Database connection failed:', err);
    }
})();

module.exports = app;