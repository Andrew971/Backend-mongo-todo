
/* In CoffeeShop.js */
// Require mongoose in this file.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const UsersSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true,
  },
  todos:{
    type:Array,
    default:[]
  }
});

// Create a model using schema.
const Users = mongoose.model('Users', UsersSchema);

// Make this available to our Node applications.
module.exports = Users;