const mongoose = require('mongoose')

const saleRecordSchema = new mongoose.Schema({
    sold: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
})

module.exports = saleRecordSchema