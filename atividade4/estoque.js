let itens = []

function validar(item){
    let valido = true;

    if(!is_numerico(item.id) || item.id <= 0){
        valido = false;
    }

    if(is_id_cadastrado(item.id)){
        valido = false;
    }

    if(item.nome.length <= 0){
        valido = false;
    }

    if(!is_numerico(item.qtd) || item.qtd < 0){
        console.log(item.quantidade)
        valido = false;
    }
    return valido;
}
function adicionar(item){
    
    let valido = validar(item);
    if(valido){
        itens.push(item);
    } 
    return valido;
}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}

function is_id_cadastrado(id){
    let item_cad = false;
    itens.forEach(item_cadastrado => {
        if(id == item_cadastrado.id){
            item_cad = true;
        }
    });
    return item_cad;
}

function listar(){
    return itens;
}

function remover(produto, lista){
    if(lista.has(produto)){
    
        return lista.delete(produto)
    } else {
        console.log("Esse produto não está no estoque");
    }
}

function editar(id, qtd){
    if(!is_numerico(id)|| !is_id_cadastrado(id) || !is_numerico(qtd) || qtd < 0){
        return false;
    } 
    itens.forEach(item_cadastrado => {
        item_cadastrado.qtd = qtd;
    });
    return true;
}

module.exports = {
    adicionar,
    remover, 
    editar,
    listar
}