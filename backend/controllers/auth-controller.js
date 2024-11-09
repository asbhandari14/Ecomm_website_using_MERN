

const Auth = require("../models/authSchema");


const AllUserData=async(req, res)=>{
    try {
        const allData = await Auth.find({});
        if(!allData) res.status(401).json({mssg : "No user Data Available"})
        return res.status(200).send(allData);
    } catch (error) {
        console.log(error);
    }
}


const RegisterUser=async(req, res)=>{
    try {
        const {username, email, password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({mssg : "All field are required to be filled"})
        }

        const alreadyExistedUser = await Auth.findOne({email : email});

        if(alreadyExistedUser) return res.status(400).json({mssg : "User already existed"});
        else{
            const userCreated = await Auth.create({
                username: username, 
                email : email,
                password : password,
            });
            if(!userCreated) res.status(401).json({mssg: "Some error occured"});
            return res.status(201).json({success: true, userCreated, token : await userCreated.generateToken()})
        }
       
    } catch (error) {
        console.log(error);
    }
}


const loginUser=async(req, res)=>{
    try {
        const {email, password} = req.body;
        const userExisted = await Auth.findOne({email});
        if(!userExisted) res.status(401).json({mssg : "Invalid Credential"});
        
        
        let loggedUserExisted = await userExisted.comparePassword(password);

        if(!loggedUserExisted) res.status(401).json({mssg: "Invalid Credential"});
        return res.status(201).json({success : true, mssg : "User is Logged in", token : await userExisted.generateToken()})
    } catch (error) {
        console.log(error);
    }
}


module.exports = {AllUserData, RegisterUser, loginUser}