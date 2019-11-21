const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  cpf: {
    type: Number
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  telephone: {
    type: Number
    }
}, {
    collection: 'clients'
  })

module.exports = mongoose.model('Client', clientSchema)
