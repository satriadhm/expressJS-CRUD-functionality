const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongodbConfig");


class transaction {
    static transaction() {
        const transaction = getDb().collection('transactions');
        return transaction;
    }
    static findById(id) {
        return this.transaction().findOne(
          { _id: ObjectId(id) },
          { projection: { password: 0 } }
        );
      }
    
      static findAll() {
        return this.transaction()
          .find({}, { projection: { password: 0 } })
          .toArray();
      }
    
      static create(transaction) {
        return this.transaction().insertOne(transaction);
      }
    
      static destroy(id) {
        return this.transaction().deleteOne({ _id: ObjectId(id) });
      }
}

module.exports = transaction;