const express = require('express')
const User = require('../models/user')

const router = express.Router()

// Get User Route
router.get('/getUsers', (req, res) => {
    User.find({}, (err, doc) => {
        if (err) {
            return res.json({ message: "Failed", err })
        }
        else {
            return res.json({ message: "Success", doc })
        }
    })
})

// Post User Route
router.post('/createUser', (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    User.create(data, (err, doc) => {
        if (err) {
            return res.json({ message: "Failed", err })
        }
        else {
            return res.json({ message: "Success", doc })
        }
    })
})

// Update User Route
router.put('/updateUser', (req, res) => {
    let { id } = req.body
    let data = req.body
    User.findByIdAndUpdate(id ,data, { new : true }, (err, doc) => {
        if (err) {
            return res.json({ message: "Failed", err })
        }
        else {
            return res.json({ message: "Success", doc })
        }
    })
})


// Delete User Route
router.delete('/deleteUser', (req, res) => {
    let { id } = req.body
    User.findByIdAndRemove(id ,(err, doc) => {
        if (err) {
            return res.json({ message: "Failed", err })
        }
        else {
            return res.json({ message: "Success", doc })
        }
    })
})

module.exports = router