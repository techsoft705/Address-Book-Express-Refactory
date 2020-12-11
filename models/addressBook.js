const mongoose = require('mongoose')
const AddressBookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'name is required']
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'address is required']
  },
  phone: {
    type: Number,
    min: 12,
    trim: true,
    required: [true, 'phone number is required']
  }
})

module.exports = mongoose.model('todos', AddressBookSchema)
