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

    // delete question
}

module.exports = QuestionController