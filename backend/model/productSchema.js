const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : String,
    category : String,
    image : String,
    price : Number,
    description : String,
})

const productModel = mongoose.model('products',productSchema)

module.exports = productModel;