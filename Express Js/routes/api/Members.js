const express = require('express');
const router = express.Router();
const uuid = require('uuid')
const Member = require('../../Member');

// Gets all Members
router.get('/' , (req,res) => {
    res.json(Member)
})

// Gets Single Member
router.get('/:id' , (req,res) => {
    const found = Member.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json(Member.filter(member => member.id === parseInt(req.params.id) ))
    }else{
        res.status(400).json({ msg : 'Member Not Found'})
    }
})

// Create Member
router.post('/',(req,res)=>{
    const newMember = {
        id: uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(200).json({ msg : 'Please include a name and email'})
    }

    Member.push(newMember)
    res.json(Member)
})

// Update Member
router.put('/:id' , (req,res) => {
    const found = Member.some(member => member.id === parseInt(req.params.id))

    if(found){
       const update = req.body;
       Member.forEach(member => {
           if(member.id === parseInt(req.params.id)){
               member.name = update.name ? update.name : member.name,
               member.email = update.email ? update.email : member.email
            
               res.json({msg : 'Member Update', Member})

            }
       })
    }else{
        res.status(400).json({ msg : 'Member Not Found'})
    }
})

// Delete Member
router.delete('/:id' , (req,res) => {
    const found = Member.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json({ msg : 'Member Deleted', Members : Member.filter(member => member.id !== parseInt(req.params.id))})
    }else{
        res.status(400).json({ msg : 'Member Not Found'})
    }
})

module.exports = router