const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/User')
const url = 'mongodb://localhost/Practice'
const bodyParser = require('body-parser')
const app = express()

// Mongo DB Connect
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

// Check if Mongodb Connected
db.once('open', () => {
    console.log("connected to mongodb")
})

// Body Parser
app.use(bodyParser.json())

// Routes
app.use('/api', userRoutes)

// Home Route
app.get('/', (req, res) => res.send('Hello'))

// Port
const Port = process.env.Port || 3000
app.listen(Port, () => console.log(`Server Started at Port : ${Port}`))
