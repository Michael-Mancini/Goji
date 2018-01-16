const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    guacamole:{
        type: Boolean,
        required: true
    },
    sellInfo:{
        type: Boolean,
        required: true
    },
    datePicker:{
        type: Date,
        required: true
    }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);