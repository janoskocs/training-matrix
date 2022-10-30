require('dotenv').config()

const express = require('express')
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

//Listen
app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT + '...')
})