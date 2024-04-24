const express = require('express')
const router = express.Router()
const { verifyUser } =require('../utils/verifyToken.js')
const {createReview} = require('../controllers/reviewController.js')
router.post('/:tourId',verifyUser,createReview)

module.exports = router