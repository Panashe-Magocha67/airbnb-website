const mongoose = require("mongoose");
const placeSchema = new mongoose.Schema({
    owner:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
         address:{
            type: String,
            required: true,
        },
        photos:[{ type: String}],
        description:{
            type:String,
        },
        perks:[{ type: String  }],
        extraInfo:{
            type: String,
        },
         maxGuest:{
            type: Number,
         },
          price:{
            type: Number,
         },
});
const Place = mongoose.Schema("Place", placeSchema);
module.exports = Place;