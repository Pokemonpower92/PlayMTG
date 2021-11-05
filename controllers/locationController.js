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
    const id = req.params.id;
    const body = req.body;

    console.log("Nope!")

    if (!id) {
        res.status(400).json({
            success: false,
            message: "No id given",
        });
    }
    if (!body) {
        res.status(400).json({
            success: false,
            message: "No body given.",
        });
    }

    const location = await Location.findById(id).catch( () => {
        console.log("Why tho")
        res.status(404).json({
            success: false,
            message: `Location ${id} not found.`,
        });
    });

    location.name = body.name;
    location.address = body.address;
    location.description = body.description;
    location.image = body.image;
    location.phone = body.phone;
    location.website = body.website;
    location.rating = 0;
    location.reviews = location.reviews;

    console.log(location.rating)
    console.log(location.reviews)

    location.save()
        .then(() => {
            return res.status(200).json({
                success: true,
                data: location,
            });
        })
        .catch(err => {
            console.log(err)
            return res.status(404).json({
                err,
                message: "Location not updated"
            });
        })

};

// TODO write this.
deleteLocation = async (req, res) => {
    res.send("Deleting a location.");
};

getLocationById = async (req, res) => {
    const { id } = req.params;

    const location = await Location.findById(id).populate('reviews');

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
