// const { MongoClient } = require("mongodb");

// async function dbConnect() {
//   const uri =
//     "mongodb://atlas-sql-6585ba94ad140c02e3270e8f-eddb8.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin";
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     console.log("Connected to the database");
//     return client; // Return the connected client for further use
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw error;
//   }
// }

// module.exports = dbConnect;
