// const multer = require("multer");
// const path = require("path");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./Images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// module.exports.upload = multer({
//   storage: storage,
//   limits: { fileSize: "5000000" },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif|webp/;
//     const mimeType = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));
//     if (mimeType && extname) {
//       return cb(null, true);
//     } else {
//       return cb("Give proper files formate to upload");
//     }
//   },
// }).single("image");

// middleware/upload.js

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif|webp/;
  const mimeType = fileTypes.test(file.mimetype);
  const extname = fileTypes.test(path.extname(file.originalname));
  if (mimeType && extname) {
    cb(null, true);
  } else {
    cb("Give proper files format to upload");
  }
};

const singleUpload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB limit
  fileFilter: fileFilter,
}).single("image");

const multipleUpload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB limit
  fileFilter: fileFilter,
}).fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  
]);

// .array("images", 3);

module.exports = { singleUpload, multipleUpload };
