const { ObjectId } = require('mongodb');
const { getDb } = require('../config/mongoDbConfig');

class product {
    static product() {
        const product = getDb().collection('products');
        return product;
    }
    static findById(id) {
        return this.product().findOne(
          { _id: ObjectId(id) },
          { projection: { password: 0 } }
        );
      }
    
      static findAll() {
        return this.product()
          .find({}, { projection: { password: 0 } })
          .toArray();
      }
    
      static create(product) {
        return this.product().insertOne(product);
      }
    
      static destroy(id) {
        return this.user().deleteOne({ _id: ObjectId(id) });
      }
}

module.exports = product;
