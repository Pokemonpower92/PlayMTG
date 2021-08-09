/* CRUD APIS for PlayMTG Locations */
const Location = require("../models/location");

createLocation = (req, res) => {
    res.send("Creating a location.");
};

updateLocation = async (req, res) => {
    res.send("Updating a location.");
};

deleteLocation = async (req, res) => {
    res.send("Deleting a location.");
};

getLocationById = async (req, res) => {
    const { id } = req.params;

    const location = await Location.findById(id);

    if (location) {
        res.status(200).json({
            success: true,
            data: location,
        });
    } else {
        res.status(404).json({
            success: false,
            message: `Location ${id} not found.`,
        });
    }
};

getLocations = async (req, res) => {
    /* Render a page detailing all locations. */
    const locations = await Location.find();

    if (locations) {
        res.status(200).json({
            success: true,
            data: locations,
        });
    } else {
        res.status(404).json({
            success: false,
            message: `Locations not found`,
        });
    }
};

module.exports = {
    createLocation,
    updateLocation,
    deleteLocation,
    getLocationById,
    getLocations,
};
