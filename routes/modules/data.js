const express = require('express')
const router = express.Router()

// utils
const { wrapAsync } = require('../../utils/util')

// controllers
const { data } = require('../../controllers/data_controller')

router.get('/', wrapAsync(data))

module.exports = router
