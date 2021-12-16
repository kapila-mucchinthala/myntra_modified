const mongoose = require("mongoose");

const sweatshirtdetailSchema = new mongoose.Schema(
    {
        Sweatshirt: { type: mongoose.Schema.Types.ObjectId, ref: Sweatshirt },
        seller: { type: "string", required: false },
        prod_detail: { type: "string", required: true },
        size_fit: { type: "string", required: true },
        material: { type: "string", required: true },
        wash: { type: "string", required: false },
        specification: [
            {
                sleeve_length: { type: "string" },
                neck: { type: "string" },
                pattern: { type: "string" },
                length: { type: "string" },
                type: { type: "string" },
                pattern_type: { type: "string" },
                hood: { type: "string" },
                pockets: { type: "Number" }

            }
        ]
    }
);

const Sweatshirtdetail = mongoose.model("Sweatshirtdetail", sweatshirtdetailSchema);
module.exports = Sweatshirtdetail;