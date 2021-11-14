const mongoose = require('mongoose')

const popSchema = new mongoose.Schema({
    psa_1 : {
        type: Number,
        required: true
    },
    psa_2 : {
        type: Number,
        required: true
    },
    psa_3 : {
        type: Number,
        required: true
    },
    psa_4 : {
        type: Number,
        required: true
    },
    psa_5 : {
        type: Number,
        required: true
    },
    psa_6 : {
        type: Number,
        required: true
    },
    psa_7 : {
        type: Number,
        required: true
    },
    psa_8 : {
        type: Number,
        required: true
    },
    psa_9 : {
        type: Number,
        required: true
    },
    psa_10 : {
        type: Number,
        required: true
    },
    psa_total : {
        type: Number,
        required: true
    }
})

// const popModel = new mongoose.model('pop', popSchema)

module.exports = popSchema