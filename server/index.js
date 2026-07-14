require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectWithDB = require('./config/db');
const cloudinary = require("cloudinary").v2;
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")
// connect with database
connectWithDB();
// cloudinary configurations
cloudinary.config({ 
        cloud_name: 'tzewpfqd', 
        api_key: '227474135683736', 
        api_secret: 'xAAerjtlzmliHIgAF1XPyh4PY4I' // Click 'View API Keys' above to copy your API secret
    });
const app = express();
app.use(
    cookieParser());
    app.use(
        (cookieSession({
            name: "session",
            maxAge: process.env.COOKIE_TIME  * 24 * 60 * 60 * 1000,
        keys: [process.env.SESSION_SCERET],
        secure: true,
        sameSite: "none",
        httpOnly: true
     }))
    
    )
    app.json(express.json());
    app.use(
        cors({
            origin: process.env.CLIENT_URL,
            credentials: true,
        })
    );
    app.use("/", require("./routes"));
    app.listen(process.env.PORT || 8000, (err) => {
        if(err){
            console.log("Error is there while connecting the server:", err);
        }
        console.log('server is running onto the bport no. ${process.env.PORT}');
    });
    module.exports = app;