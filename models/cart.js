const mongoose = require("mongoose");

// Define the Cart Schema
const cartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
});

// Create a Cart model based on the schema
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
