const User = require('../models/User.js');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//user registration
const register = async(req,res)=>{
    try {
        //hashing password
        const hash = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
            photo: req.body.photo
        })
        await newUser.save()
        res.status(200).json({success:true,message:'User registration successful'})
    } catch (error) {
        res.status(500).json({success:false,message:'User registration failed ,Try again'})
    }
}
const login = async (req, res) => {
    const email = req.body.email;

    try {
        const user = await User.findOne({ email });
        console.log('User:', user);

        //if user does not exist
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        //if password is incorrect
        if (!checkCorrectPassword) {
            console.log('Incorrect password');
            return res.status(401).json({ success: false, message: 'Incorrect email or password, please try again' });
        }

        const { password, role, ...rest } = user._doc;

        //create jwt token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });

        //set token in browser cookies and send response to client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days in milliseconds
        }).status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: { ...rest },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
};

module.exports = {
    register,
    login
}