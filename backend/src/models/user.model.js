const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        number: { type: "Number", required: true, unique: true }
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;