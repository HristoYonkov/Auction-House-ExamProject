const {
    Schema,
    model,
    Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /https?:\/\/./i;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [2, "Title must be minimum two characters!"],
        maxlength: [25, "Title must be maximum fifteen characters!"],
    },
    category: {
        type: String,
        required: true,
        enum: ["Vehicles", "Computers", "Home Appliances", "Others"],
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: "Invalid URL, must start with HTTP/HTTPS",
        },
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price should be positive number!"],
    },
    description: {
        type: String,
        required: true,
        minlength: [10, "Description must be minimum one characters!"],
        maxlength: [200, "Description must be maximum hundred characters!"],
    },
    isClosed: {type: Boolean, default: false},
    bidder: { type: ObjectId, ref: "User", required: false },
    _ownerId: { type: ObjectId, ref: "User", required: true },
    follows: { type: Array, default: [], required: false },
});

const Listing = model("Listing", listingSchema);
module.exports = Listing;
