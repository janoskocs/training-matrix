require('dotenv').config()
const express = require('express')

//express app
const app = express()

//Middleware
app.use((req, res, next) => { //This middleware will fire upon any requests firstc
    console.log(req.path, req.method)
})
//Routes

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

//Listen
app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT + '...')
})