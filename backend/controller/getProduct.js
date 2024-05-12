const ProductModel = require('../model/productSchema');

const getProduct = async (req, res) => {
  try {
    const allProduct = await ProductModel.find({});
    // console.log("allProduct",allProduct);
    
    res.json({
      message: "All Products",
      success: true,
      error: false,
      data: allProduct
    });
  } 
  catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}

};

module.exports = getProduct;
