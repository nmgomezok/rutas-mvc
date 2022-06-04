const express = require ("express");
const routes = express.Router();

routes.use("/", require("./main.routes"));
routes.use("/product", require("./product.routes"));
routes.use("/user", require("./user.routes"));

module.exports = routes;
