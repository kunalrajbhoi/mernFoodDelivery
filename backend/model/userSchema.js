const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    image: String,
});


const userModel = mongoose.model('users', userSchema);


module.exports = userModel;
