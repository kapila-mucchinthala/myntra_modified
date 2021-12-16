const mongoose = require("mongoose");

const sweatshirtSchema = new mongoose.Schema(
    {
        name: { type: "string", required: true },
        description: { type: "string", required: true },
        actualprice: { type: "Number", required: true },
        realprice: { type: "Number", required: true },
        offer: { type: "Number", required: true },
        star: { type: "Number", required: false },
        ratings: { type: "Number", required: false }
    }
);

const Sweatshirt = mongoose.model("Sweatshirt", sweatshirtSchema);
module.exports = Sweatshirt;