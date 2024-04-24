const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const tourRoute = require ('./routes/tours.js')
const userRoute = require('./routes/users.js')
const authRoute = require('./routes/auth.js')
const reviewRoute =require('./routes/reviews.js')
const bookingRoute = require('./routes/bookings.js')

dotenv.config()
const app = express()
const port = process.env.PORT
const corsOptions ={
    origin:true,
    credentials:true,
}


//database connection
mongoose.set("strictQuery",false);
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true, 
            useUnifiedTopology:true
        })
      console.log('Connected to db')

    } catch (error) {
        console.log('connection failed')
    }
}


 //middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tours',tourRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/reviews',reviewRoute)
app.use('/api/v1/booking',bookingRoute)

app.listen( port ,()=>{
    console.log('server listening on port',port)
    connect();
})