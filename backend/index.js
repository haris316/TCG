const express = require('express')
const mongoURL = require('./config/mongoURL')
const mongoose = require('mongoose')
const cards_api = require('./routes/api/card_api')
const sales_api = require('./routes/api/sales_api')

const App = express()
App.use(express.urlencoded({extended: true}))
App.use(express.json())

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Database Successfully Connected.'))
.catch((err) => console.log(err))

App.use(cards_api)
App.use(sales_api)

const port = 9002 || process.env.PORT

App.listen(port, ()=>{
    console.log('Server running on port ' + port)
})