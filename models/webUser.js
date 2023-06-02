const { default: mongoose } = require("mongoose");

WebUserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,

})
const WebUser = mongoose.model('Category',WebUserSchema);

module.exports = {
    WebUser
}