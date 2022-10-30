const express = require('express')
const router = express.Router()

//GET all trainings
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all trainings' })
})

//GET a single training
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single training' })
})

//POST a single training
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new training' })
})

//DELETE a single training
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a training' })
})

//PATCH a single training
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'PATCH a training' })
})

module.exports = router