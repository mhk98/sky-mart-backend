const mongoose = require("mongoose");

// Define the Product Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

// Create a Product model based on the schema
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
