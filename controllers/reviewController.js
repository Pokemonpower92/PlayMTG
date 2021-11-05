/* CRUD APIS for PlayMTG Location reviews*/
const Review = require("../models/review");
const Location = require("../models/location");

createReview = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    
    if (!body) {
        res.send(400).json({
            success: false,
            message: "No body.",
        });
    }

    const newReview = new Review(body);

    const location = await Location.findById(id)

    location.reviews.push(newReview);

    location
        .save()
        .catch(err => {
            console.log("huh");
        });

        
    newReview
    .save()
    .then(() => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(err)
    });
};

updateReview = async (req, res) => {
    console.log("I edited a review");
};

deleteReview = async (req, res) => {
    console.log("I deleted a review.");
};

getReviewById = async (req, res) => {
    console.log("I got a review.");
};

getReviews = async (req, res) => {
    console.log("I got all reviews.");
};

module.exports = {
    createReview,
    updateReview,
    deleteReview,
    getReviewById,
    getReviews,
};
