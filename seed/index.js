/* Seed the development database with randomized entries. */

const mongoose = require("mongoose");
const Location = require("../models/location");
const Review = require("../models/review");
const { namesOne, namesTwo, descriptions } = require("./seedHelper");
const { reviews } = require("./reviews");
const cities = require("./cities");

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
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Select random element from array.
const randomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

const randInt = () => {
    return Math.floor(Math.random() * 5 + 1);
};

const seedDB = async () => {
    console.log("Deleting all locations...");
    await Location.deleteMany({});

    console.log("Seeding... ");

    // Produce 50 random locations from the helper files.
    for (let i = 0; i < 50; i++) {
        const nameOne = randomElement(namesOne);
        const nameTwo = randomElement(namesTwo);
        const description = randomElement(descriptions);
        const cityElement = randomElement(cities);

        const address = `${cityElement.city}, ${cityElement.state}`;
        let s = new Location({
            name: nameOne + nameTwo,
            address: address,
            description: description,
        });

        if (Math.floor(Math.random() * 100) >= 25) {
            s.image = "https://source.unsplash.com/collection/190727/1600x900";
        }

        // Generate random reviews.
        for (let i = 0; i < randInt(); i++) {
            const name = "The SeedMan";
            const review = randomElement(reviews);
            const rating = randInt();

            let l = new Review({
                author: name,
                body: review,
                rating: rating,
                location: s,
            });

            await l
                .save()
                .then(() => {
                    console.log(`Created review`);
                })
                .catch((err) => {
                    console.log(err);
                });
            
                s.reviews.push(l);
        }

        await s
            .save()
            .then(() => {
                console.log(`Created entry ${i + 1}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

seedDB().then(() => {
    db.close();
});
