const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb+srv://shivamfw10:Shivam1234@cluster0.oco5c.mongodb.net/myntramodify?retryWrites=true&w=majority");
}

module.exports = connect;