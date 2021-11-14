const mongoose = require('mongoose')
const popSchema = require('./populationSchema')

const subcatSchema = new mongoose.Schema({
    card_id: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true,
        default:''
    },
    year: {
        type: Number,
        required: true
    },
    population: popSchema
})

// const subcatModel = new mongoose.model('sub_category', subcatSchema)

module.exports = subcatSchema