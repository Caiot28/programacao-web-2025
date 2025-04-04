const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res)=>{
    let html = '<h1>App Calculadora</h1>';
    html += '<h3>Rotas disponíveis: </h3>';
    html+= '<p>/somar/:a/:b (<a href="/somar/1/1">somar/1/1</a>)</p>'
    html+= '<p>/subtrair/:a/:b (<a href="/subtrair/2/2">subtrair/2/2</a>)</p>'
    html+= '<p>/multiplicar/:a/:b (<a href="/multiplicar/3/3">multiplicar/3/3</a>)</p>'
    html+= '<p>/dividir/:a/:b (<a href="/dividir/4/4">dividir/4/4</a>)</p>'
    res.send(html);
});

app.get('/somar/:a/:b', (req, res)=>{
    res.send(`${req.params.a} + ${req.params.b} = ${calc.somar(Number(req.params.a), Number(req.params.b))}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    res.send(`${req.params.a} - ${req.params.b} = ${calc.subtrair(Number(req.params.a), Number(req.params.b))}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    res.send(`${req.params.a} * ${req.params.b} = ${calc.multiplicar(Number(req.params.a), Number(req.params.b))}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    res.send(`${req.params.a} / ${req.params.b} = ${calc.dividir(Number(req.params.a), Number(req.params.b))}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta '+PORT)
});

