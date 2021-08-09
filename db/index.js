const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/playMTGDB";

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTION ESTABLISHED TO PLAYMTGDB");
    })
    .catch((err) => {
        console.log("ERROR CONNECTING TO PLAYMTGDB");
        console.log(err);
    });

const db = mongoose.connection;

module.exports = db;
