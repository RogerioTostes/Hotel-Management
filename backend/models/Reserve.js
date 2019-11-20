const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reserveSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  }
}, {
    collection: 'reserves'
  })

module.exports = mongoose.model('Reserve', reserveSchema)