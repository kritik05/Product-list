const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');

mongoose.set("strictQuery",false);
main().catch(err=>console.log(err));
async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/electronics');
console.log("Connection Open")
}

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/electronics',async (req,res)=>{
    const products = await Product.find({})
    res.render('product/index',{products});
})
app.get('/elect/new',(req,res)=>{
    res.render('product/new')
})
app.get('/elect/:id',async (req,res)=>{
    const {id} = req.params
    const products = await Product.findById(id)
    res.render('product/show',{products});
})
app.post('/electronics',async (req,res)=>{
    const newproduct = new Product(req.body);
    await newproduct.save()
    res.redirect(`/elect/${newproduct._id}`)
})
app.get('/elect/:id/edit',async (req,res)=>{
    const {id} = req.params
    const products = await Product.findById(id)
    res.render('product/edit',{products});
})
app.put('/elect/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true, new:true})
    res.redirect(`/elect/${product._id}`)
})
app.delete('/elect/:id',async(req,res)=>{
    const {id} = req.params;
    const deletedproduct = await Product.findByIdAndDelete(id);
    res.redirect('/electronics');
})
app.listen(3000,()=>{
    console.log("ON Port 3000")
})