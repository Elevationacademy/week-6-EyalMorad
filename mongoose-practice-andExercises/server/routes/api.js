const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

///////////////////////////////////////////
///////Exercise 1
///////////////////////////////////////////
router.post('/person', function (req,res){
    let person = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })
    person.save()
    res.end()
})


///////////////////////////////////////////
///////Exercise 2
///////////////////////////////////////////
router.put('/person/:id', function (req, res){
    let pId = req.params.id
    Person.findByIdAndUpdate(pId, {age:80}, function (err, person){ //we can use { new: true } To see the value of the update object in the callback
    res.end()
}) 
})



///////////////////////////////////////////
///////Exercise 3
///////////////////////////////////////////
router.delete('/apocalypse', function (req, res){
    db.people.remove()
    res.end()
})
module.exports = router


