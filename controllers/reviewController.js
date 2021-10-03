/* CRUD APIS for PlayMTG Location reviews*/
const Review = require("../models/review");

createReview = (req, res) => {
    console.log("I created a review");
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
