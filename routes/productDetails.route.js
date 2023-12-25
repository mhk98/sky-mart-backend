const express = require("express");
const router = express.Router();
const productDetailsController = require("../controllers/productDetails.controller");
const { multipleUpload } = require("../middleware/upload");

// GET route to fetch all products
router.get("/:id", productDetailsController.getSingleProductDetails);
router.post(
  "/create-productDetails/:id",
  multipleUpload,
  productDetailsController.createProductDetails
);

module.exports = router;
