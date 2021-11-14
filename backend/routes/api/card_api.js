const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const cardSchema = require('../../models/cardSchema')
const cardModel = new mongoose.model('card', cardSchema)

router.get('/api/cards', (req, res)=>{
    const category = req.body.category
    const set_name = req.body.set_name

    if(!category && !set_name){
        cardModel.find((err, result)=>{
            if(err){
                res.send(err.message)
            } else if(!result){
                res.send('Error: No cards found!')
            } else {
                res.send(result)
            }
        })
    } else if(category && !set_name){
        cardModel.find({category: category}, (err, result)=>{
            if(err){
                res.send(err.message)
            } else if(!result){
                res.send('Error: No cards found!')
            } else {
                res.send(result)
            }
        })
    } else if(!category && set_name){
        cardModel.find({set_name: set_name}, (err, result)=>{
            if(err){
                res.send(err.message)
            } else if(!result){
                res.send('Error: No cards found!')
            } else {
                res.send(result)
            }
        })
    } else if(category && set_name){
        cardModel.find({category: category, set_name: set_name}, (err, result)=>{
            if(err){
                res.send(err.message)
            } else if(!result){
                res.send('Error: No cards found!')
            } else {
                res.send(result)
            }
        })
    }
})

module.exports = router