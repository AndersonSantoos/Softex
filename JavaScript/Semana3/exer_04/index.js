const express = require("express");
const app = express();

// CONEXÃO COM BANCO DE DADOS
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function() {
    console.log("Banco de dados conectado com sucesso! ")
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro)
})

//Rodando aplicação
app.listen(3333, function(){
    console.log("Servidor rodando na URL: http://localhost:3333");
});