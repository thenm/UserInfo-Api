const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors())
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Users = require('./models/users')
// console.log('UserInfo', UserInfo);

// Connect to Mongoose
mongoose.connect('mongodb://localhost/userdb');
var db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Please go to /api');
});

// Api for getting users
app.get('/api/users', (req, res) => {
  Users.getUsers((err, users) => {
    if(err){
      throw err;
    }
    res.json(users);
  });
});

// Api for adding user
app.post('/api/users', (req, res) => {
  var user = req.body;
  Users.addUser(user, (err, user) => {
    if(err){
      throw err;
    }
    res.json(user);
  });
});

app.listen(3000);
console.log('Running on port 3000...');
