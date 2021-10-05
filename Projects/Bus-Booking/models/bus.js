const mongoose = require('mongoose')

// Books Schema
const seatsSchema = new mongoose.Schema({
    seatNumber:Number,
    seatStatus:{
        type:Boolean,
        default:'Not Booked'
    }
})

// Bus Schema
const busSchema = new mongoose.Schema({
    busName:String,
    from:String,
    to:String,
    date: {
        type: Date,
        default: Date.now()
    },
    seats:[seatsSchema]
})

module.exports = mongoose.model('buses',busSchema) 