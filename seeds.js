const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.set("strictQuery",false);
main().catch(err=>console.log(err));
async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/electronics');
console.log("Connection Open")
}

// const p = new Product({
//     name:'Iphone',
//     price:'800',
//     category:'device'
// })
// p.save()
// .then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e)
// })

const seedProduct = [
    {
    name:'buds',
    image:'https://media.wired.com/photos/5e506e12a4dea100087f96eb/1:1/w_1147,h_1147,c_limit/Gear_Samsung-Galaxy-Buds+-out-of-case-SOURCE-Samsung.jpg',
    price:'120',
    category:'wearable'
},
{
    name:'powerbank',
    image:'https://m.media-amazon.com/images/I/61fefWEyHdL._SX679_.jpg',
    price:'13',
    category:'accesories'
},
{
    name:'macbook',
    image:'https://static.toiimg.com/thumb/resizemode-4,msid-79631597,width-1200,height-900/79631597.jpg',
    price:'900',
    category:'device'
}
]

Product.insertMany(seedProduct)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})