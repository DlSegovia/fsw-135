const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Blueprint
const inventorySchema = new Schema({
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number
  }
})

module.exports = mongoose.model("inventory", inventorySchema)