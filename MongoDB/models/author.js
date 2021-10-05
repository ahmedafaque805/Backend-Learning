const mongoose = require('mongoose')

// Books Schema
const bookSchema = new mongoose.Schema({
    title:String,
    pages:Number
})

// Author Schema
const authorSchema = new mongoose.Schema({
    name: String,
    age:Number,
    date: {
        type: Date,
        default: Date.now()
    },
    books:[bookSchema]
})

module.exports = mongoose.model('author',authorSchema) 