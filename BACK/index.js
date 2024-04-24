require('dotenv').config()

const express = require('express')
const App = express()
const dbConnection = require('./config/config')
const routes = require('./routes/routes')


const PORT = process.env.PORT || 3000

App.listen(PORT,()=>{
    console.log(`server on http://localhost:${PORT}`)
})
App.use(express.json())
App.use(express.urlencoded({extended: true}))
App.use('/', routes);

dbConnection() 