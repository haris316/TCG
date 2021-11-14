const mongoose = require('mongoose')
const saleRecordSchema = require('./saleRecordSchema')

const gradingCompanySchema = new mongoose.Schema({
    psa: [[saleRecordSchema]],
    bgs: [[saleRecordSchema]],
    cgc: [[saleRecordSchema]]
})

module.exports = gradingCompanySchema