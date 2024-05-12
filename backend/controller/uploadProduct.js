const ProductModel = require("../model/productSchema");

async function uploadProduct(req, res) {
    try {
        
        const newProduct = new ProductModel(req.body);
        const savedProduct = await newProduct.save(); 
        res.status(201).json({
            message: "Product uploaded successfully",
            error: false,
            success: true,
            data: savedProduct
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false,
        });
    }
}

module.exports = uploadProduct;
