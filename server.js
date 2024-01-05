if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
};

const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const {connectDb, getDb} = require('./config/mongodbConfig');
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 3000;

connectDb((err) => {
  if (err) {
    console.log('Connection error: ', err);
  } else {
    console.log('Database connected');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

