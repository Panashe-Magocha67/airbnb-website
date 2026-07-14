const mongoose = require("mongoose");
const bycrypt = require('bcrypt.js')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required:true,
        default:'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'
    },
});
// encrypt the password
userSchema.pre("save", async function (next){
    this.password = await bycrypt.hash(this.password, 10)
})

//create and return the jwt token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id : this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRY,
    })
}
//validate the password
userSchema.methods.isVlidatedPassword = async function (userSchema) {
    return await bycrypt.compare(userSentPassword. this.password)
}
const User = mongoose.model("User", userSchema);
module.exports = User;
