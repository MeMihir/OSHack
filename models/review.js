const mongoose  = require('mongoose');

const ReviewSchema  = new mongoose.Schema({
    author  : {
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'Author'
    },
    transaction : {
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'Transaction'
    },
    text        : String
});

module.exports  = ReviewSchema;