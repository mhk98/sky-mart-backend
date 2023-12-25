const mongoose = require("mongoose");

// Define the Product Schema
const productDetailsSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  image1: {
    type: String,
  },
  image2: {
    type: String,
  },

  // title: {
  //   type: String,
  //   required: true,
  // },
  // images: {
  //   White: String,
  //   Green: String,
  // },
  // colors: [String],
  // sizes: [String],
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

// Create a Product model based on the schema
const ProductDetails = mongoose.model("ProductDetails", productDetailsSchema);

module.exports = ProductDetails;
