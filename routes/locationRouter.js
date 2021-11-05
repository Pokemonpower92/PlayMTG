const express = require("express");
const locationController = require("../controllers/locationController");
const reviewRouter = require("./reviewRouter");
const location = express.Router();


location.get("/", locationController.getLocations);
location.get("/:id", locationController.getLocationById);
location.post("/", locationController.createLocation);
location.put("/:id/edit", locationController.updateLocation);
location.delete("/:id", locationController.deleteLocation);

location.use("/:id/reviews", reviewRouter);
module.exports = location;
