const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    stock: Boolean,
    title : String,
    price: Number 
},{timestamps:true})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product