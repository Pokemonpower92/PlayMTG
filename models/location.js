const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
