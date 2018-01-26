const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

//initialize express
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

const material = require('./routes/material');
const doughnut = require('./routes/doughnut');
const users = require('./routes/users');

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(cors());

//static assets
app.use(express.static(path.join(__dirname, 'public')));

//route links
app.use('/api', material);
app.use('/api2', doughnut);
app.use('/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//port listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started on port: ' + port)
});