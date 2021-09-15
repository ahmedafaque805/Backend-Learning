const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    date: {
        type: Date,
        default: Date.now()
    },
    status:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('users',userSchema) 