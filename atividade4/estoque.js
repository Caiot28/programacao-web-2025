function adicionar(produto, quantidade, lista){

    if (lista.has(produto)){
        let qtdAtual = lista.get(produto);
        return lista.set(produto, qtdAtual + quantidade);
    } else {
        return lista.set(produto, quantidade);
    }

}

function remover(produto, lista){
    if(lista.has(produto)){
    
        return lista.delete(produto)
    } else {
        console.log("Esse produto não está no estoque");
    }
}

function editar(produto, quantidade, lista){
    if(lista.has(produto)){
        return lista.set(produto, quantidade)
    } else {
        console.log("O produto não existe")
    }
}

module.exports = {
    adicionar,
    remover, 
    editar
}