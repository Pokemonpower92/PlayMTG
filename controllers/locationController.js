/* CRUD APIS for PlayMTG Locations */
const Location = require("../models/location");

createLocation = (req, res) => {
    const body = req.body;

    if (!body) {
        res.send(400).json({
            success: false,
            message: "No body.",
        });
    }

    const newLocation = new Location(body);

    newLocation
        .save()
        .then(() => {
            res.send(201).json({
                success: true,
                id: newLocation._id,
                message: "New poll created",
            });
        })
        .catch((err) => {
            console.log(err);
            res.send(400).json({
                success: false,
                message: "No location created",
            });
        });
};

updateLocation = async (req, res) => {
    const { id } = red.params.id;
    const body = req.body;

    if (!id) {
        req.status(400).json({
            success: false,
            message: "No id given",
        });
    }
    if (!body) {
        req.status(400).json({
            success: false,
            message: "No body given.",
        });
    }

    const location = await Poll.findById(id);

    if (location) {
        location.name = body.name;
        location.location = body.location;
        location.description = body.description;
        location.rating = body.rating;

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

// TODO write this.
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
