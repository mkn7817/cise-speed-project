// app.js
require("dotenv").config({ path: ".env"});
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Connect Database
connectDB();



if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api running");
    })
}

app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));