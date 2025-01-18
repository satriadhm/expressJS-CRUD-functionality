const mongoose = require('mongoose');

const connectDb = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI is not defined');

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Database connected');
};

module.exports = { connectDb };