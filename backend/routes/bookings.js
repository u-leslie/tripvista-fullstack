const express = require('express')
const router = express.Router()
const { verifyUser,verifyAdmin } =require('../utils/verifyToken.js')
const {createBooking,getBooking,getAllBooking} =require('../controllers/bookingController.js')

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking)
router.get('/',verifyAdmin,getAllBooking)

module.exports = router