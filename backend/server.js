require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./routers/auth-router");
const productRouter = require("./routers/product-router");
const connectionDB = require("./Database/connectionDB");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT;

const dirname = path.resolve();


app.use(cors({ origin : "http://localhost:5173" , methods: ['GET', 'POST', 'DELETE', 'PUT'], allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"] , credentials: true}))


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/auth", authRouter);
app.use("/product", productRouter);


app.use(express.static(path.join(dirname, "/frontend/dist")));
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(dirname, "frontend", "dist", "index.html"))
})



connectionDB().then(()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else{
            console.log(`Server is connected at the port : ${PORT}`);
        }
    })
})
