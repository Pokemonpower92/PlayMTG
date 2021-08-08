const express = require('express');
const locationRouter = require('./routes/locationRouter');
const path = require('path');
const app = express();
const db = require('./db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/locations', locationRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})