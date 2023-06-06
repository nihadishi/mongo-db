const { default: mongoose } = require("mongoose");

booksSchema = new mongoose.Schema({
    name: String,
    desciription: String,
    publishDate: {type: Date, default: Date.now},
    addDate: {type: Date, default: Date.now}

})
const books = mongoose.model('Books', booksSchema)

module.exports = {
    books
}