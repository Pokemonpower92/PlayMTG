const express = require("express");
const reviewController = require("../controllers/reviewController");
const review = express.Router();

review.get("/", reviewController.getReviews);
review.get("/:id", reviewController.getReviewById);
review.post("/", reviewController.createReview);
review.put("/:id/edit", reviewController.updateReview);
review.delete("/:id", reviewController.deleteReview);

module.exports = review;
