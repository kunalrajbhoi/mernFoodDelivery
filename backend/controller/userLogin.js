const userModel = require("../model/userSchema");

async function userLogin(req, res) {

  try {
    const { email, password } = req.body;

    if (!email) {
        throw new Error("Please provide an email.");
    }

    if (!password) {
        throw new Error("Please provide a password.");
    }

     // Find the user by email
    const user = await userModel.findOne({ email });
    // console.log(user.email);

    if (!user) {
        throw new Error("User not found.");
    }

    if(password !== user.password){
        throw new Error("Incorrect password.");
    }

    res.status(200).json({
        message: "Login successful.",
        error: false,
        success: true,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image
        }
    });

  } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogin;
