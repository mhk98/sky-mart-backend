const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const { singleUpload } = require("../middleware/upload");

router.post("/create-cart", singleUpload, cartController.createCart);
router.get("/", cartController.getCartProduct);
router.delete("/:id", cartController.deleteCartProduct);

module.exports = router;
