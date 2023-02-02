if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
};

const express = require('express');
const cors = require('cors');
const router = require('./routes');
const {connectDb, getDb} = require('./config/mongoDbConfig');
const app = express();