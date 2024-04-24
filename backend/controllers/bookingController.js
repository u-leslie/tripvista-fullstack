const Booking = require('../models/Booking.js')

//create a new Booking
const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try {
      const savedBooking = await newBooking.save()
        res.status(200).json({success: true,message:"Tour successfully booked",data:savedBooking})
    } catch (error) {
        res.status(500).json({success: false,message:"Internal server error "}) 
    }
}

//get single book
const getBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const book=await Booking.findById(id)
        res.status(200).json({success: true,message:"successfully",data:book})
    } catch (error) {
        res.status(404).json({success: false,message:"Not found "}) 
    }
}

//get single book
const getAllBooking = async(req,res)=>{
    try {
        const books = await Booking.find({})
        res.status(200).json({success: true,message:"successfully",data:books})
    } catch (error) {
        res.status(500).json({success: false,message:"Internal Server Error"}) 
    }
}

module.exports = {
    createBooking,
    getAllBooking,
    getBooking
}
