const mongoose = require('mongoose');

const DoughnutSchema = mongoose.Schema({
    grayish: {
        type: Number,
        required: true
    },
    peach: {
        type: Number,
        required: true
    },
    teal: {
        type: Number,
        required: true
    },
    brown: {
        type: Number,
        required: true
    }
});

const Doughnut = module.exports = mongoose.model('Doughnut', DoughnutSchema);