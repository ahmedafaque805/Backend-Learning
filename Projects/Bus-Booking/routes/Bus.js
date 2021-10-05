const express = require('express')
const Bus = require('../models/bus')

const router = express.Router()

// // Get Author Route
// router.get('/getAuthors', (req, res) => {
//     Author.find({}, (err, doc) => {
//         if (err) {
//             return res.json({ message: "Failed", err })
//         }
//         else {
//             return res.json({ message: "Success", doc })
//         }
//     })
// })

// // Create Author Route
// router.post('/createAuthor', (req, res) => {
//     let data = {
//         name: req.body.name,
//         age: req.body.age
//     }
//     Author.create(data, (err, doc) => {
//         if (err) {
//             return res.json({ message: "Failed", err })
//         }
//         else {
//             return res.json({ message: "Success", doc })
//         }
//     })
// })


// // Delete Author Route
// router.delete('/deleteAuthor', (req, res) => {
//     let { id } = req.body
//     Author.findByIdAndRemove(id ,(err, doc) => {
//         if (err) {
//             return res.json({ message: "Failed", err })
//         }
//         else {
//             return res.json({ message: "Success", doc })
//         }
//     })
// })



// // Add books Route
// router.put('/AddBooks', (req, res) => {
//     let { id } = req.body
//     let obj={
//         title:req.body.title,
//         pages:req.body.pages
//     }
//     Author.findByIdAndUpdate(id,{$push:{books:obj}},{new:true}, (err, doc) => {
//         if (err) {
//             return res.json({ message: "Failed", err })
//         }
//         else {
//             return res.json({ message: "Success", doc })
//         }
//     })
// })


// // Update Books Route
// router.put('/UpdateBooks', (req, res) => {
//     Author.findOneAndUpdate({"_id":req.body.id,"books._id":req.body.bookId},{"books.$.title":req.body.title},{new:true}, (err, doc) => {
//         if (err) {
//             return res.json({ message: "Failed", err })
//         }
//         else {
//             return res.json({ message: "Success", doc })
//         }
//     })
// })

// // Delete Author Route
// router.delete('/deleteBook', (req, res) => {
//     Author.findOneAndUpdate({ "_id":req.body.id }, { books: { $elemMatch: {"_id": req.body.bookId} } }, {$unset:{books: ""}} ,(err, doc) => {
//         if (err) {
//             return res.json({ message: "Failed", err })
//         }
//         else {
//             return res.json({ message: "Success", doc })
//         }
//     })
// })

module.exports = router