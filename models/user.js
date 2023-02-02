const { ObjectId } = require('mongodb');
const { getDb } = require('../config/mongoDbConfig');

class User {
    static user() {
        const user = getDb().collection('users');
        return user;
    }
    static findById(id) {
        return this.user().findOne(
          { _id: ObjectId(id) },
          { projection: { password: 0 } }
        );
      }
    
      static findAll() {
        return this.user()
          .find({}, { projection: { password: 0 } })
          .toArray();
      }
    
      static create(user) {
        return this.user().insertOne(user);
      }
    
      static destroy(id) {
        return this.user().deleteOne({ _id: ObjectId(id) });
      }

}

module.exports = User;
