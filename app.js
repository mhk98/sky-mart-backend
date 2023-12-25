const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(cors({ origin: true, credentials: true }));
app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//static image folder
app.use("/Images", express.static("Images"));
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
module.exports = app;
