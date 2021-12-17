const express = require("express");
const router = express.Router();

const Sweatshirt = require("../models/swtshirt.model");

router.post("/", async (req, res) => {
    let item = await Sweatshirt.create(req.body);

    return res.status(201).send({ item });
});

router.get("/all", async (req, res) => {
    let item = await Sweatshirt.find().lean().exec();

    return res.status(200).send({ item })
});

router.patch("/update/:id", async (req, res) => {
    let item = await Sweatshirt.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.status(201).send({ item });
});

router.get("/one/:id", async (req, res) => {
    let item = await Sweatshirt.findById(req.params.id).lean().exec();

    return res.status(200).send({ item });
});

module.exports = router;