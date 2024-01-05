const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI; 

const client = new MongoClient(uri);
const dbName = "product_service";
let dbConnection;

async function connectDb(callback) {
    try {
        await client.connect();
        const db = client.db(dbName);
        dbConnection = db;
        callback(null, db); 
    } catch (err) {
        await client.close();
        console.log(err);
        callback(err, null);  
    }
}

function getDb() {
    return dbConnection;
}

module.exports = { connectDb, getDb };
