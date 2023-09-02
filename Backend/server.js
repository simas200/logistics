require('dotenv').config()
const express = require('express')

//Express app
const app = express()

//Request handeler - routes
app.get('/', (req, res) =>{
    res.json({mssg: 'App is active'})
})

//Request listener
app.listen(process.env.PORT, ()=> {
    console.log("Listening to port: " + process.env.PORT)
})

process.env