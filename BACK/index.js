require('dotenv').config()

const express = require('express')
const App = express()
const dbConnection = require('./config/config')


const PORT = process.env.PORT || 3000

App.listen(3000,()=>{
    console.log(`server on http://localhost:${PORT}`)
})

App.get("/",(req,res)=>{
    res.send("holiwis")
})

dbConnection()