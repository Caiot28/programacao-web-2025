const AgendamentoConsulta = require('../models/agendamentoConsultaModels');

function getIndexView(req, res){
    res.render('index.html');
}

function getAgendamentosView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        res.render('index.html', {campos_invalidos, dados_consulta});
    }
}

module.exports = {
    getIndexView,
    postAgendarConsulta,
    getAgendamentosView
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
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

    return campos_invalidos;
}