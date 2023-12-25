const router = require("express").Router();
const product = require("./product.route");
const productDetails = require("./productDetails.route");
const user = require("./users.route");
const cart = require("./cart.route");

router.use("/product", product);
router.use("/productDetails", productDetails);
router.use("/user", user);
router.use("/cart", cart);

module.exports = router;
