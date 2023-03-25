const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    category :{
     type:String,
     enum: ['device','wearable','accesories']
    }
})

const Product = mongoose.model('Product',productSchema);
module.exports=Product;