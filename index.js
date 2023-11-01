const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>AV2</h1>");
})

//rota do cadastro de produtos
app.get("/nota", function(req,res){
    res.send("<h1>É 10!!!</h1>");
})

//rota com parametro 
app.get("/confirma/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("Nota " + req.params.parametro + " ta confirmada!");
})

//rota com parametro opcional
app.get("/agradecimentos/:professor?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Agradecimentos, " + nome + "!</h1>");
    }else{
        res.send("Agradecimentos, professor!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

