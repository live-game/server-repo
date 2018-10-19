'use strict'

const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/QuestionController')

router.post('/',QuestionController.createQuestion)
      .get('/lists', QuestionController.getListOfQuestions)
      .post('/random' ,QuestionController.getRandomQuestion)
      .put('/:id', QuestionController.editQuestion)
      .delete('/:id', QuestionController.deleteQuestion)

module.exports = router