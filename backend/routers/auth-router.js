const express = require("express");
const router = express.Router();



const {AllUserData, RegisterUser, loginUser} = require("../controllers/auth-controller");




router.route("/allData").get(AllUserData)

router.route("/signup").post(RegisterUser)

router.route("/login").post(loginUser)


module.exports = router