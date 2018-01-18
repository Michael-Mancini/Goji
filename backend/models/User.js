const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    day:{
        type: Date,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const Item = module.exports = mongoose.model('User', UserSchema);