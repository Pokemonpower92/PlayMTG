const mongoose = require('mongoose');
const Location = require('../models/location');

const uri = 'mongodb://localhost:27017/playMTGDB'

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION ESTABLISHED TO PLAYMTGDB");
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO PLAYMTGDB");
        console.log(err);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedDB = async () => {
    const s = new Location({name: 'Seedville', location: 'Seed st.'});
    console.log(s);

    console.log("Deleting all locations...")
    await Location.deleteMany({});

    console.log("Seeding... ");
    await s.save().then(() => {
        console.log("Inserted")
    })
    .catch(err => {
        console.log(err)
    })
}

seedDB()