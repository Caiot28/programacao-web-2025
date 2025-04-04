const express = require('express');
const estoque = require('./estoque');

const app = express();

let lista = new Map();

app.get('/adicionar/:nome/:qtd', (req, res)=>{
    estoque.adicionar(req.params.nome, parseInt(req.params.qtd), lista);
    res.send(`Adicionou ${req.params.qtd} ${req.params.nome}`);
});

app.get('/listar', (req, res) => {
    let resposta = '';
    lista.forEach((quantidade, produto) => {
        resposta += `Nome: ${produto}, Quantidade: ${quantidade}<br>`;
        resposta += `\n`;
    });
  
    res.send(resposta);
  });

app.get('/remover/:id', (req, res)=>{
    estoque.remover(req.params.id, lista)
    res.send(`${req.params.id} removido com sucesso`)
});

app.get('/editar/:id/:qtd', (req, res)=>{
    estoque.editar(req.params.id, req.params.qtd, lista)
    res.send(`Editado com sucesso`)
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta '+PORT)
});

