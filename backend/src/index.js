const express = require("express");
const app = express();
app.use(express.json());

const sweatshirtController = require("./controllers/swtshirt.controller");

app.use("/sweatshirt", sweatshirtController);

module.exports = app;