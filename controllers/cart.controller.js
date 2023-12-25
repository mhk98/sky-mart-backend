const Cart = require("../models/cart");

exports.createCart = async (req, res) => {
  try {
    // const { title, image } = req.body;
    // console.log("cartDetailsProduct", req.body);

    // const data = {
    //   title: title,
    //   image: image,
    // };
    const result = await Cart.create(req.body);

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully add to cart",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getCartProduct = async (req, res) => {
  try {
    const result = await Cart.find({});

    res.status(200).send({
      status: "Success",
      message: "Successfully got all cart",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteCartProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("object", id);
    // Find and delete the product by ID
    const deletedProduct = await Cart.findByIdAndDelete(id);

    // Check if the product was found and deleted
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ status: "Error", message: "Product not found for deletion" });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully delete cart",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
