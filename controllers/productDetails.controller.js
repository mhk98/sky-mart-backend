const { ObjectId } = require("mongodb");
const ProductDetails = require("../models/productDetails");

// Controller function to handle product creation
exports.createProductDetails = async (req, res) => {
  try {
    const { title } = req.body;
    // const { image1, image2 } = req.files;
    console.log(req.body);
    const { id } = req.params;
    const { image1, image2 } = req.files;
    console.log("file", req.files);
    console.log("id", id);

    // Create a new product instance based on the Product model

    // const newProductDetails = await ProductDetails.create({
    //   product: newProduct._id, // Assign the product ID
    //   // Other product details data
    // });

    // Save the new product to the database

    const newProductDetails = new ProductDetails({
      title,
      product: id,
      image1: image1[0].path,
      image2: image2[0].path,
    });

    const result = await newProductDetails.save();

    res.status(200).send({
      status: "Success",
      message: "Successfully created productDetails",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle error response
  }
};

exports.getSingleProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Product", id);
    const productDetails = await ProductDetails.findOne({
      product: ObjectId(id),
    });

    if (!productDetails) {
      return res
        .status(404)
        .json({ status: "Error", message: "Product details not found" });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully got product details",
      data: productDetails,
    });
  } catch (error) {
    console.error("Error in getSingleProductDetails:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};
