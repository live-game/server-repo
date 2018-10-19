'use strict'

const Question = require('../models/question')

class QuestionController {
    // create question
    static createQuestion(req,res) {
        //check authentication
        if(req.headers.secretcode === process.env.SECRET_CODE){
            Question.create({
                question: req.body.question,
                choices: req.body.choices,
                answerindex: Number(req.body.answerindex)
            })
              .then(question => {
                  res.status(201).json({
                      msg: 'Question Created',
                      data: question
                  })
              })
              .catch(error =>{
                  res.status(500).json({
                      msg: 'ERROR Create question ',error
                  })
              })
        }else{
            res.status(403).json({
                msg: 'You are not authorized to add questions'
            })
        }
    }

    // get list of questions
    static getListOfQuestions(req,res) {
        Question.find({})
          .then(questions =>{
              res.status(200).json({
                  msg: 'List of Questions',
                  data: questions
              })
          })
          .catch(error =>{
              res.status(500).json({
                  msg: 'ERROR Get List of questions ',error
              })
          })
    }

    // delete questions 
    static deleteQuestions(req,res) {
        // check authentication
        if(req.headers.secretcode === process.env.SECRET_CODE){
            Question.findOneAndRemove({
                _id: req.params.id
            })
              .then(question =>{
                  res.status(201).json({
                      msg: 'Question has been deleted',
                      data: question
                  })
              })
              .catch(error =>{
                  res.status(500).json({
                      msg: 'ERROR Delete '
                  })
              })
        }else{
            res.status(403).json({
                msg: 'You are not authorized to delete questions'
            })
        }
    }
    
}

module.exports = QuestionController