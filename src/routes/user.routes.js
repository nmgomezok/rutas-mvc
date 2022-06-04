const express = require ("express");
const routes = express.Router();
const userController = require ("../controller/userController");

//rutas
routes.get("/login", userController.login);
routes.get("/register", userController.register);

module.exports = routes; 