'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    question: String,
    choices: [String],
    answerindex: Number
},{
    timestamps: true
})

const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question