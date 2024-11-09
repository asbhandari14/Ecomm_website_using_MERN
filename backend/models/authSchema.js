const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")



const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
}, { timestamps: true });


authSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        try {
            // Hash password logic (using bcrypt for example)
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    next();
})


authSchema.methods.comparePassword = async function (password){
    try {
        return bcrypt.compare(password, this.password);
    } catch (error) {
        console.log(error);
        // next(error);
    }
}


authSchema.methods.generateToken = async function (next) {
    try {
        // let userData = this;
        console.log(this, process.env.JWT_SECRET_KEY);
        return jwt.sign({username : this.username, email : this.email, id:this._id.toString()}, process.env.JWT_SECRET_KEY);
    } catch (error) {
        console.log(error);
        // next(error)
    }
}


const Auth = new mongoose.model("Auth", authSchema);

module.exports = Auth;