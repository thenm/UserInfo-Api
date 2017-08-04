const mongoose = require('mongoose');

// User Schema
const usersSchema = mongoose.Schema({
  name: {
       type: String
      //  required: true
     },
     email: {
       type: String
      //  required: true
     },
     web: {
       type: String
      //  required: true
     },
     coverletter: {
       type: String
      //  required: true
     },
     resume: {
       type: String
      //  required: true
     },
     worklove: {
       type: String
      //  required: true
     },
     created: {
       type: Date,
       default: Date.now
     }
});

const Users = module.exports = mongoose.model('Users', usersSchema);

// Get Users
module.exports.getUsers = (callback, limit) => {
	Users.find(callback).limit(limit);
}

// Add User
module.exports.addUser = (user, callback) => {
	Users.create(user, callback);
}
