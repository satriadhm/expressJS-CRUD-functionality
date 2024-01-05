const { ObjectId } = require('mongodb');
const { getDb } = require('../config/mongodbConfig');

class User {
    static user() {
        const user = getDb().collection('users');
        return user;
    }
    static findById(id) {
        return this.user().findOne(
          { _id: ObjectId(id) },
        );
      }
    
    static findByEmail(email){
      return this.user().findOne(
        { email: email }
      );
    }
      static findAll() {
        return this.user()
          .find({})
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
