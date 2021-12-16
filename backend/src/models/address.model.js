const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        name: { type: "string", required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: user },
        pincode: { type: "Number", required: true, minlength: 6 },
        addrress: { type: "string", required: true },
        town: { type: "string", required: true },
        city: { type: "string", required: true },
        state: { type: "string", required: true }
    }
);

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;