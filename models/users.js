const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  Name: String,
  Email: {
    type: String,
    unique: true,
  },
  Password: String,
});

// Hash password before saving user
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("Password") || !this.Password) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.Password, salt);
    this.Password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Custom method for validating passwords
userSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.Password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
