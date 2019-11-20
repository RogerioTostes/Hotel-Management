const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bedroomSchema = new Schema({
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
    collection: 'bedrooms'
  })

module.exports = mongoose.model('BedRoom', bedroomSchema)