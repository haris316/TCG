const mongoose = require('mongoose')
const subcatSchema = require('./subcategorySchema')

const cardSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    set_name:  {
        type: String,
        required: true
    },
    category:  {
        type: String,
        required: true
    },
    sub_category: [subcatSchema]
})

// const cardModel = new mongoose.model('card', cardSchema)

module.exports = cardSchema