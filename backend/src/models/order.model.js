const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    product: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: user },
            Sweatshirt: [{type: mongoose.Schema.Types.ObjectId, ref: Sweatshirt }]
        }
    ]
});

// orders: [
//     {
//         smallcase_id: { type: mongoose.Schema.Types.ObjectId, ref: "smallcase_data", required: false },
//         date: { type: String, required: false }
//     }
// ]
