const express = require ("express");
const routes = express.Router();
const mainController = require ("../controller/mainController");

//rutas
routes.get("/", mainController.home);

module.exports = routes; 