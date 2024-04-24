const Tour = require( '../models/Tour.js')


//create tour
 const createTour = async (req,res)=>{
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save()
        res.status(200).json({success:true,message:'Succcessfully created',data:savedTour})
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to create tour, Try again'})
    }
}


//update tour
const updateTour = async (req,res)=>{
    const id = req.params.id 
    try {
      const updatedTour = await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.status(200).json({success:true,message:'Succcessfully updated',data:updatedTour})
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to update tour,please try again'})
    }
}
//delete tour
const deleteTour = async (req,res)=>{
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:'Succcessfully deleted'})
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to delete tour,please try again'}) 
    }
}
//get 1 tour
const getSingleTour = async (req,res)=>{
    const id = req.params.id;
    try {
        const singleTour = await Tour.findById(id).populate('reviews')
        res.status(200).json({success:true,message:'Tour found',data:singleTour})
    } catch (error) {
        res.status(404).json({success:failed,message:'Tour not found'})
    }
}
//get all tour
const getAllTour = async (req,res)=>{

    //pagination
    const page = parseInt(req.query.page)
    console.log(page)
    try {
      const allTours = await Tour.find({}).populate('reviews')
      .skip(page*8)
      .limit(8);
      res.status(200).json({success:true,message:'All tours found',count:allTours.length,data:allTours}) 
    } catch (error) {
        res.status(500).json({success:false,message:'failed to fetch all tours'})
    }
}


//get tour by search
const getTourBySearch = async(req,res)=>{
    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize =parseInt(req.query.maxGroupSize)
    try {
        //gte->greater than or equal to
        const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')
        res.status(200).json({success:true,message:'successful',
        data:tours
    })
    } catch (error) {
        res.status(404).json({success:false,message:'Failed to fetch',  
    })
    }}


    //get featured tour
const getFeaturedTour = async (req,res)=>{

    try {
      const featuredTours = await Tour.find({featured:true}).populate('reviews')
      .limit(8);
      
      res.status(200).json({success:true,message:'Successful',data:featuredTours}) 
    } catch (error) {
        res.status(500).json({success:false,message:'failed to fetch all tours'})
    }
}
//get tour count
 const getTourCount = async(req,res)=>{
    try{
const tourCount =await Tour.estimatedDocumentCount()
res.status(200).json({success:true,message:"Successfull",data:tourCount})
    }
    catch(error){
        res.status(500).json({success:false,message:"Failed returning tour count"})
    }
 }

module.exports = {
    createTour,
    deleteTour,
    getAllTour,
    getSingleTour,
    updateTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
}
