/* CRUD APIS for PlayMTG Locations */
const Location = require('../models/location');

createLocation = (req, res) => {
    res.send("Creating a location.");
}

updateLocation =  async (req, res) => {
    res.send("Updating a location.");
}

deleteLocation = async (req, res) => {
    res.send("Deleting a location.");
}

getLocationById = async (req, res) => {
    const { id } = req.params;

    const location = await Location.findById(id)
    
    if(location) {
        res.render("locations/location", {location: location});
    }
    else {
        res.send("404");
    }
}

getLocations = async (req, res) => {
    /* Render a page detailing all locations. */ 
    const locations = await Location.find();

    if(locations){
        res.render("locations/index", {locations: locations});
    }
    else{
        res.send("404");
    }
}

module.exports = {
    createLocation,
    updateLocation,
    deleteLocation, 
    getLocationById, 
    getLocations
}