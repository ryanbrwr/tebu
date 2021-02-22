const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    userUID: {
        type: String,
        required: true
    },
    market: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    currency: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    cronID: {
        type: String,
        required: true
    }
}, { collection: 'Plans' , strict: false})

module.exports = mongoose.model('Plan', planSchema)