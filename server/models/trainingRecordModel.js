const mongoose = require('mongoose')

const trainingRecordSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    trainingTitle: {
        type: String,
        required: true
    },
    trainingDate: {
        type: Date,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('TrainingRecord', trainingRecordSchema)