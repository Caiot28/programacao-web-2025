function getIndexView(req, res){
    
    res.render('index.html');
}

function postAgendarConsulta(req, res){
    let dados = req.body;
    let erro = false;
    let campos_invalidos = [];

    if(dados.inputNome.length == 0){
        erro = true;
        campos_invalidos.push("Nome");
    }
    if(dados.inputSobrenome.length == 0){
        erro = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados.inputCPF.length == 0){
        erro = true;
        campos_invalidos.push("CPF");
    }
    if(dados.inputTelefone.length == 0){
        erro = true;
        campos_invalidos.push("Telefone");
    }
    if(dados.inputCEP.length == 0){
        erro = true;
        campos_invalidos.push("CEP");
    }
    if(dados.inputEndereco.length == 0){
        erro = true;
        campos_invalidos.push("Endereco");
    }
    if(dados.inputDataNasc.length == 0){
        erro = true;
        campos_invalidos.push("Data de Nascimento");
    }

    if(dados.inputClinica == null){
        erro = true;
        campos_invalidos.push("Clinica");
    }
    if(dados.inputHora.length == 0){
        erro = true;
        campos_invalidos.push("Hora");
    }
    if(dados.inputData.length == 0){
        erro = true;
        campos_invalidos.push("Data");
    }
    if(dados.inputEspecialidade == null){
        erro = true;
        campos_invalidos.push("Especialidade");
    }
    res.render('index.html', {erro, campos_invalidos, dados});
}

module.exports = {
    getIndexView,
    postAgendarConsulta
}