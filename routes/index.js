const express = require('express')
const router = express.Router()

// routes
const data = require('./modules/data')

router.use('/data', data)

module.exports = router
