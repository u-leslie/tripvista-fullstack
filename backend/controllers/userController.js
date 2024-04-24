const User = require( '../models/User.js')


//create User
 const createUser = async (req,res)=>{
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json({success:true,message:'Succcessfully created',data:savedUser})
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to create User, Try again'})
    }
}


//update User
const updateUser = async (req,res)=>{
    const id = req.params.id 
    try {
      const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.status(200).json({success:true,message:'Succcessfully updated',data:updatedUser})
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to update User,please try again'})
    }
}
//delete User
const deleteUser = async (req,res)=>{
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:'Succcessfully deleted'})
    } catch (error) {
        res.status(500).json({success:false,message:'Failed to delete User,please try again'}) 
    }
}
//get 1 User
const getSingleUser = async (req,res)=>{
    const id = req.params.id;
    try {
        const singleUser = await User.findById(id)
        res.status(200).json({success:true,message:'User found',data:singleUser})
    } catch (error) {
        res.status(404).json({success:failed,message:'User not found'})
    }
}
//get all User
const getAllUser = async (req,res)=>{
    try {
      const allUsers = await User.find({}) 
      res.status(200).json({success:true,message:'All Users found',count:allUsers.length,data:allUsers}) 
    } catch (error) {
        res.status(500).json({success:false,message:'failed to fetch all Users'})
    }
}

module.exports = {
    createUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
  
}
