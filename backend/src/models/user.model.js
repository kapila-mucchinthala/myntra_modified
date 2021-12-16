const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        number: { type: "Number", required: true, unique: true },
        order:{type:mongoose.Schema.Types.ObjectId, ref:order},
        
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;