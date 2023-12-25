const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

// Database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.jasc8yb.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connection is successful");

    // Start the server after successful database connection
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("dbConnected");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });
