const express = require('express')
const User = require('../models/user')

const router = express.Router()

// Get User Route
router.get('/getUser', (req, res) => {
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

module.exports = router