const mongoose = require('mongoose')
const gradingCompanySchema = require('./gradingCompanySchema')

const salesSchema = new mongoose.Schema({
    card_id: {
        type: String,
        required: true
    },
    grading_company: gradingCompanySchema
})

module.exports = salesSchema