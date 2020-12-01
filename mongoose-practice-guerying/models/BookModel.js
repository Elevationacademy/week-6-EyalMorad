const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: Number

})






const Book = mongoose.model("BookModel", bookSchema)
module.exports = Book