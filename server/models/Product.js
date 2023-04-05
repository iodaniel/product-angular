const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name: {
        type:String,
        required: true

    },
    category : {
        type: String,
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('Product', ProductSchema);