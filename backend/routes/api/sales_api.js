const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const salesSchema = require('../../models/salesSchema')
const salesModel = new mongoose.model('sale', salesSchema)

router.get('/api/sales', (req, res)=>{
    const card_id = req.body.card_id

    if(!card_id){
        res.send('Error: No card ID found!')
    } else {
        salesModel.findOne({card_id: card_id}, (err, result)=>{
            if(err){
                res.send(err)
            } else if(!result){
                res.send(null)
            } else{
                res.send(result)
            }
        })
    }
})

module.exports = router