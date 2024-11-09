const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerConfig");


const {addProduct, getAllProductArray, getSingleProductArray, getCategoryWiseProductArray, getNewCollectionArray} = require("../controllers/product-controller")



router.route("/addProduct").post(upload.single("product"), addProduct);
router.route("/getAllProduct").get(getAllProductArray);
router.route("/getSingleProduct/:productId").get(getSingleProductArray);
router.route("/getCategoryWiseProduct").post(getCategoryWiseProductArray);
router.route("/getNewCollection").get(getNewCollectionArray);


module.exports = router