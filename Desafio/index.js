const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    
    res.render('index.html');
});

app.post('/agendar_consulta', (req, res)=>{

    let dados = req.body;
    let erro = false;
    let campos_invalidos = [];

    if(dados.inputNome.length == 0){
        erro = true;
        campos_invalidos.push("inputNome");
    }
    if(dados.inputSobrenome.length == 0){
        erro = true;
        campos_invalidos.push("inputSobrenome");
    }
    if(dados.inputCPF.length == 0){
        erro = true;
        campos_invalidos.push("inputCPF");
    }
    console.log(req.body)

    res.render('index.html', (erro, campos_invalidos, dados));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("app rodando na porta " + PORT);
});