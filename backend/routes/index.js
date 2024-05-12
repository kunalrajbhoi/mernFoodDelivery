const express = require("express");
const userSignup = require("../controller/userSignup");
const userLogin = require("../controller/userLogin");
const uploadProduct = require("../controller/uploadProduct");
const getProduct = require("../controller/getProduct");
const Payment = require("../controller/payment");

const router = express.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/uploadProduct',uploadProduct)
router.get('/product',getProduct)
router.post('/create-checkout-session',Payment)

module.exports = router;
