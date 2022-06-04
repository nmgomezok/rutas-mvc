const express = require ("express");
const routes = express.Router();
const productController = require ("../controller/productController");

//rutas
routes.get("/products", productController.products);
routes.get("/productCart", productController.productCart);

module.exports = routes; 