function ValidaSoma() {
    var res = document.getElementById("verificacao").value
    if (res == "8") return true
    else return false
}

function ValidaTelefone(telefone) {
    if (!isNaN(telefone) && telefone.toString().length >= 10 && telefone.toString().length <= 11) return true
    else return false
}


function ValidaEmail(email) {
    var x = /\S+@\S+\.\S+/
    return x.test(email)
}

function enviarFormulario() {
    var dados = {
        "nome": document.getElementById("nome").value,
        "email": document.getElementById("email").value,
        "telefone": document.getElementById("telefone").value
    }

    if (ValidaSoma() && ValidaEmail(dados.email) && dados.nome != "" && ValidaTelefone(dados.telefone)) {

        // Os dados estão preparados para serem enviados por XHR nesse formato
        alert("Os dados foram enviados com sucesso!")
    } else {
        alert("Verificação Incorreta")
    }
}