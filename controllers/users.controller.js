const User = require("../models/users");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwt_token");

exports.signup = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log("body", req.body);
    const isUserExist = await User.findOne({ Email: Email });

    if (isUserExist) {
      return res.status(409).send("User already exists");
    }

    const result = await User.create({ Email, Password });

    res.status(200).send({
      status: "Success",
      message: "Successfully signed up",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error signing up",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    // console.log(req.body);

    if (!Email || !Password) {
      res.status(401).json({
        status: "fail",
        message: "Please provide your credentials",
      });
    }

    const user = await User.findOne({ Email: Email });
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "No user found. Please create an account first",
      });
    }

    const isPasswordValid = bcrypt.compareSync(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password or email is not correct",
      });
    }

    const accessToken = generateToken(user);
    // const refreshToken = generateToken(user);

    //set refresh token into cookie
    const cookieOptions = {
      secure: process.env === "production" ? true : false,
      httpOnly: true,
    };
    // res.cookie("refreshToken", refreshToken, cookieOptions);
    res.cookie("accessToken", accessToken, cookieOptions);
    const data = {
      accessToken,
      user,
    };
    res.status(200).send({
      status: "Success",
      message: "Logged in successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Username or password is not curret",
      error: error.message,
    });
  }
};
