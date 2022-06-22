// 1. controller
// 2. ajuda do express

const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post('/treinador', controller.createCoach)
router.get('/treinadores', controller.findAllCoaches)
router.patch('/treinador', controller.updateCoach)
router.delete('/treinador/:id', controller.deleteCoach)
router.

module.exports = router