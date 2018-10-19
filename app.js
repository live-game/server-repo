'use strict'
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const QuestionRouters = require('./routes/QuestionRouter')
const app = express()

mongoose.connect('mongodb://localhost:27017/quizdb',{useNewUrlParser: true})
// mongoose.connect(process.env.MONGO_USER,{useNewUrlParser: true})

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use('/questions', QuestionRouters)

app.get('/', (req,res)=>{
    res.send('OK')
})

app.listen(process.env.PORT || 3000, () =>{
    console.log(`listening to port `,process.env.PORT)
})