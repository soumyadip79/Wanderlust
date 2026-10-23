const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        require : true,
    },
    description: String,
    image : {

        filename: {
            type: String,
            default: "listingimage",
        },

        url: {
            type: String,
            default:
            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            set: (v) =>
            v === ""
            ? "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
            : v,
        },

        // type: String,
        // default : "default link", 
        // set : (v) => v === "" ? "default link" : v, 
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;