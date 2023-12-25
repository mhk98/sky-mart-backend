const Product = require("../models/product");

// Controller function to handle product creation
exports.createProduct = async (req, res) => {
  try {
    const { title, variation } = req.body;

    console.log(req.body);

    // Creating a product
    const newProduct = await Product.create({
      title,
      variation,
      image: req.file.path,
    });

    // Creating product details associated with the product
    // const newProductDetails = await ProductDetails.create({
    //   product: newProduct._id, // Assign the product ID
    //   // Other product details data
    // });

    res.status(200).send({
      status: "Success",
      message: "Successfully created product",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle error response
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Retrieve all products

    res.status(200).json(products); // Return products in the response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle error response
  }
};
