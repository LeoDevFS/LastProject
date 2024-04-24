const Product = require('../models/Product')

const ProductController = {
    async create (req, res) {
        try {
            console.log(req.body)
            const product = await Product.create({...req.body,stock:true})
            res.status(201).send(product)
            
        } catch (error) {
          console.log(error)
        }
      },

      async getAll (req,res){
        try {
            const product = await Product.find()
            res.json(product)
            console.log(product.length)
        } catch (error) {
            console.log(error)
        }
      },

      async getById(req,res){
        try {
            const id = req.params._id
            const product = await Product.findById(id)
            res.json(product)
            

        } catch (error) {
            console.log(error)
        }
      },

      async delete(req,res){
        try {
            const id = req.params._id
            const product = await Product.findOneAndDelete(id)
            if(!product){
                res.json({message:"product not found"})
            }
            res.json({message:`product ${product._id} with title:  ${product.title} eliminated`})


        } catch (error) {
            console.log(error)
        }
      },

      async changeInformation(req,res){
        try {
            const id = req.params._id
           // const title = req.body.title
            //const price = req.body.price
            const {title,price,stock} = req.body
            const product = await Product.findByIdAndUpdate(id,{
                title,
                price,
                stock
            },{new:true})
            if(!product){
                res.json({message:"product not found"})
            }
            res.json({message:`the product ${product._id} change title to :  ${product.title} with a price of ${product.price} disponibility ${product.stock}`})
        } catch (error) {
            console.log(error)
        }
      },

      async changeStock(req,res){
        try {
            const id = req.params._id
            const stock = req.body.stock
            if(stock==true){
            const product = await Product.findByIdAndUpdate(id,{
               stock : false
            },{new:true})
            if(!product){
                res.json({message:"product not found"})
            }}else{
                if(stock==false){
                    const product = await Product.findByIdAndUpdate(id,{
                       stock : true
                    },{new:true})
                    if(!product){
                        res.json({message:"product not found"})
                    }}
            }
            res.json({message:`the product now is  ${stock== true ? ("available"):("not available")}`})
        } catch (error) {
            console.log(error)
        }
      }

      

}

module.exports = ProductController