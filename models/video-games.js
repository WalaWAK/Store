const mongoose = require('mongoose');


const storeSchema = new mongoose.Schema({
    item: String,
    quantity: String,
    price: String,
    img: {type: String, require: true},
})



const Store = mongoose.model('Store', storeSchema);
module.exports = Store; 
