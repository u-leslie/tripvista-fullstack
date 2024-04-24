const express = require('express')
const  {verifyUser ,verifyAdmin} = require('../utils/verifyToken')
const  {
    createUser,
    updateUser,
    getAllUser,
    getSingleUser,
    deleteUser,
} = require( '../controllers/userController.js')
const router = express.Router()

//create new User
router.post ('/', verifyUser,createUser)
//update User
router.put ('/:id',verifyUser,updateUser)
//delete User
router.delete ('/:id',verifyUser,deleteUser)
//get single User
router.get ('/:id',
verifyUser ,
getSingleUser)
//get all User
router.get ('/', verifyAdmin ,getAllUser)

module.exports = router