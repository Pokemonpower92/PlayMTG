const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const apiPort = process.env.PORT || 3000;

const db = require('./db');

const locationRouter = require('./routes/locationRouter');

app.use(express.urlencoded( {extended: true }));
app.use(cors());
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
    res.render("home");
})

app.use('/locations', locationRouter);

app.listen(apiPort, () => {
    console.log("Serving on port 3000");
})