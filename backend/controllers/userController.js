const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User successful" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login User successful" });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user data" });
});

module.exports = { registerUser, loginUser, getCurrentUser };
