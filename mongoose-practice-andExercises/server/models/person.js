
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person













/////////////////////////////////
//////////Material
/////////////////////////////////

/*
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/peopleDB",{useNewUrlParser: true})

const Schema = mongoose.Schema



const personSchema = new Schema({ //Creating Schema in mongoose
  firstName: String,
  lastName: String,
  age: Number
})



const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address : {
      city : String,
      street: String,
      apartment : Number
  }
})




const personSchema = new Schema({ //Another way : we can use the addressSchema and its more tidier
    firstName: String,
    lastName: String,
    age: Number,
    address : addressSchema
  })




  const Person = mongoose.model('person', personSchema) //MODEL
  //const Person = mongoose.model('person', personSchema, 'persons'); //<== persons will be the name of the collection
  let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
  //console.log(p1)
  //p1.save()              just comment out




  Person.find({}, function (err, people) {
    console.log(people)
})




  let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
  let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
  let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
  let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })
  
  let allTheShooberts = [p2, p3, p4, p5]
  //allTheShooberts.forEach(s => s.save())  





  Person.findById("5fc4def514b2e6b6fcd71bd9", function (err, person) {
    person.age += 10 //how time flies
    person.save()
})




Person.findByIdAndUpdate("5fc4def514b2e6b6fcd71bd9", { age: 70 }, function (err, person) {
  console.log(person)
})




Person.findByIdAndUpdate("5fc4def514b2e6b6fcd71bd9", { age: 80 }, { new: true }, function (err, person) { //To see the value of the update object in the callback, you must add the {new: true} parameter
  console.log(person)
})




Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
  person.remove(function (err) {
      console.log(err) //usually this will be `null`, unless something went wrong
  })
})

// also we can use the same way as above : findByIdAndRemove
*/











