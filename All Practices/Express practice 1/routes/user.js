const express = require('express')

const router = express.Router() 

router.get('/',(req,res) => {
    res.send('hello')
})

// router.get('/hello',(req,res) => {
//     res.send('hello afaque')
// })
router.post('/hello',(req,res) => {
    let data=req.body.name
    res.json(data)
})
module.exports = router