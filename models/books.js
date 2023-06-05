const { default: mongoose } = require("mongoose");

booksSchema = new mongoose.Schema({
    name: String,
    desciription: String,
    publishDate: String,
    addDate: String,

})
const books = mongoose.model('booksCategory', booksSchema);

module.exports = {
    books
}