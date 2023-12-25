const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

//database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection is successful`);
});

//server

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("dbConnected");
});