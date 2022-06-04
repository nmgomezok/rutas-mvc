const express = require ("express");
const app = express();
const port = process.env.PORT || 3000;

//routes
app.use("/", require ("./src/routes/index.routes"));

//archivos estáticos
app.use(express.static("public"))

//server
app.listen(port, (req, res) =>{
    console.log(`corriendo en el puerto ${port}`)
});