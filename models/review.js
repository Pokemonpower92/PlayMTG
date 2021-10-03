const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer",
        },
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: true,
    },
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
