const express = require('express')
const router = express.Router()

// utils
const { wrapAsync } = require('../../utils/util')

// middleware
const rateLimiter = require('../../middleware/rateLimiter')

// controllers
const { data } = require('../../controllers/data_controller')

router.get('/',
  wrapAsync(rateLimiter),
  wrapAsync(data)
)

module.exports = router
