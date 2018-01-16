//imports
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

//initialize express variable
var app = express();

//DB connection
mongoose.connect('mongodb://localhost:27017/goji', {
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

//route links
app.get('/', (req, res) => {
    res.send('hehehe');
});

const crud = require('./routes/crud');
app.use('/api', crud);

//port listen
const port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port)
});