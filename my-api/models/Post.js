const mongoose = require('mongoose');

// Models are a way to visualize how the data is presented
const BubbleSchema = mongoose.Schema({
    user: {
        type: String,
        default: "Anonymous",
        maxlength: 30,
        required: false
    },
    word: {
        type: String,
        maxlength: 40,
        required: true
    },
    definition: {
        type: String,
        maxlength: 300,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Words', BubbleSchema);