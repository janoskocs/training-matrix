const express = require('express')

const {
    createTrainingRecord,
    getTrainingRecord,
    getAllTrainingRecords,
    deleteTrainingRecord,
    updateTrainingRecord
} = require('../controllers/trainingRecordController')

const router = express.Router()

//GET all trainings
router.get('/', getAllTrainingRecords)

//GET a single training
router.get('/:id', getTrainingRecord)

//POST a single training
router.post('/', createTrainingRecord)

//DELETE a single training
router.delete('/:id', deleteTrainingRecord)

//PATCH a single training
router.patch('/:id', updateTrainingRecord)

module.exports = router