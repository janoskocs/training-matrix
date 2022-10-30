const TrainingRecord = require('../models/trainingRecordModel')
const mongoose = require('mongoose')
// GET all training records

const getAllTrainingRecords = async (req, res) => {
    const trainings = await TrainingRecord.find().sort({ createdAt: -1 }) // List them in descending order

    res.status(200).json(trainings)
}

// GET a single training record

const getTrainingRecord = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {// Check if the id is valid in mongodb
        return res.status(404).json({ error: 'No such training record.' })
    }
    const trainingRecord = await TrainingRecord.findById(id)

    if (!trainingRecord) {
        return res.status(404).json({ error: 'No such training record.' })
    }

    res.status(200).json(trainingRecord)
}

//CREATE a new training record
const createTrainingRecord = async (req, res) => {
    const { name, trainingTitle, trainingDate } = req.body
    //Add document to DB
    try {
        const trainingRecord = await TrainingRecord.create({ name, trainingTitle, trainingDate })
        res.status(200).json(trainingRecord)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
//DELETE a training record

const deleteTrainingRecord = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {// Check if the id is valid in mongodb
        return res.status(404).json({ error: 'No such training record.' })
    }

    const trainingRecord = await TrainingRecord.findOneAndDelete({ _id: id })

    if (!trainingRecord) {
        return res.status(404).json({ error: 'No such training record.' })
    }

    res.status(200).json(trainingRecord)
}

//UPDATE a training record

const updateTrainingRecord = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {// Check if the id is valid in mongodb
        return res.status(404).json({ error: 'No such training record.' })
    }

    const trainingRecord = await TrainingRecord.findOneAndUpdate({ _id: id }, {
        ...req.body //The properties of body will be inserted here
    })

    if (!trainingRecord) {
        return res.status(400).json({ error: 'No such training record.' })
    }
    res.status(200).json(trainingRecord)
}

module.exports = {
    createTrainingRecord,
    getTrainingRecord,
    getAllTrainingRecords,
    deleteTrainingRecord,
    updateTrainingRecord
}