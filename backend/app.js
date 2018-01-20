//imports
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

//initialize express variable
var app = express();

//DB connection

// Map global promise to get rid of deprecation warning
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mikey:agonyvii@ds119064.mlab.com:19064/goji', {
    useMongoClient: true
});
mongoose.connection.on('connected', () => {
    console.log('~MongoDB Connected~');
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});

//middleware
app.use(cors());
app.use(bodyparser.json());

//static assets
app.use(express.static(path.join(__dirname, 'public')));

//route links
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const material = require('./routes/material');
app.use('/api', material);

const doughnut = require('./routes/doughnut');
app.use('/api2', doughnut);

const users = require('./routes/users');
app.use('/users', users);

//port listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started on port: ' + port)
});