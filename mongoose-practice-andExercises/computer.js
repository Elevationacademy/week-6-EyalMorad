const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/computerDB',{useNewUrlParser: true})

const Schema = mongoose.Schema


//SPOT CHECK 1
const computerSchema = new Schema({ //Creating Schema
    maker: String,
    price: Number,
})

const Computer = mongoose.model('computer', computerSchema)

let c1 = new Computer({maker:"Apple",price: 9000})
let c2 = new Computer({maker:"HP",price: 5000})

c1.save()
c2.save()

