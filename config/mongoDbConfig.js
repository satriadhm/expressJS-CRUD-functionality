const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017"; // connect to local mongodb

const client = new MongoClient(uri);
const dbName = "users";
let dbConnection;

async function connectDb(){
    try {
        const db = client.db(dbName)
    }catch(err){
        await client.close();
        console.log(err);
        throw err;
    }
}

function getDb(){
    return dbConnection;
}

module.exports = {connectDb, getDb};