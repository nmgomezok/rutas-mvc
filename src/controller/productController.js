const path = require ("path");

const productController = {
    products: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/products.html"))
    },
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
    }
}

module.exports = productController; 