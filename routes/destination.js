const express = require('express')
const router = express.Router()
const destCtrl = require('../controllers/destination')

router.post('/flights/:id/destination', destCtrl.create)

module.exports = router