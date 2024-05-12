const userModel = require("../model/userSchema");

async function userSignup(req, res) {
  try {
    const { name, email, password, image } = req.body;

    if (!email) {
      throw new Error("Email is required.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    if (!name) {
      throw new Error("Name is required.");
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists.");
    }

    const newUser = new userModel({
      name: name,
      email: email,
      password: password,
      image: image || null
    });


    const savedUser = await newUser.save();

    res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: "User created successfully!",
    });
  }
  catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignup;
