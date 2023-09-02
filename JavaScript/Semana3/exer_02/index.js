const express = require("express");
const app = express();

//Importando rotas
const apiRoutes = require("./projetc/routes/routes");

//Definindo rotas
app.use("/", apiRoutes);

//Rodando aplicação
app.listen(3333, function(){
    console.log("Servidor rodando na URL: http://localhost:3333");
});