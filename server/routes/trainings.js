const express = require('express')
const TrainingRecord = require('../models/trainingRecordModel')
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
router.post('/', async (req, res) => {
    const { name, trainingTitle, trainingDate } = req.body

    try {
        const trainingRecord = await TrainingRecord.create({ name, trainingTitle, trainingDate })
        res.status(200).json(trainingRecord)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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