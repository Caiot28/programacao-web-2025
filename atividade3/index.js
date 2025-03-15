const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res)=>{
    res.send('Opções: /somar/subtrair/multiplicar/dividir + /a/b');
});

app.get('/somar/:a/:b', (req, res)=>{
    res.send(`Soma = ${calc.somar(parseFloat(req.params.a), parseFloat(req.params.b))}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    res.send(`Subtração = ${calc.subtrair(parseFloat(req.params.a), parseFloat(req.params.b))}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    res.send(`Multiplicação = ${calc.multiplicar(parseFloat(req.params.a), parseFloat(req.params.b))}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    res.send(`Divisão = ${calc.dividir(parseFloat(req.params.a), parseFloat(req.params.b))}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta '+PORT)
});

