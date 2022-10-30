require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const trainingRoutes = require('./routes/trainings')

//express app
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next) => { //This middleware will fire upon any requests firstc
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/trainings', trainingRoutes)


//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port ' + process.env.PORT + '...')
        })
    })
    .catch((error) => {
        console.log(error)
    })
