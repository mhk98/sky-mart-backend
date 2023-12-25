const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { singleUpload } = require("../middleware/upload");


router.post("/create-product", singleUpload, productController.createProduct);

router.get("/", productController.getAllProducts);

module.exports = router;
