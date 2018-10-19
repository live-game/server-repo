'use strict'

const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/QuestionController')

router.post('/',QuestionController.createQuestion)
      .get('/lists', QuestionController.getListOfQuestions)

module.exports = router