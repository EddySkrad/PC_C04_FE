function FormLoad() {
    document.formPessoa.textNome.focus();
}

function ValidarNome() {
    let nome = document.getElementById("textNome");

    if (nome.value == '') {
        nome.focus();
        nome.style.color = 'red';
        return false;
    }
    else {
        nome.style.color = 'black';
        return true;
    }
}

function ValidarEmail() {
    let email = document.getElementById("textEmail");
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(email.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true;
    }
}

function ValidarTelefone() {
    let telefone = document.getElementById("textTelefone");
    let regexTelefone = /^\d{9}$/;

    if (!regexTelefone.test(telefone.value)) {
        telefone.focus();
        telefone.style.color = 'red';
        return false;
    }
    else {
        telefone.style.color = 'black';
        return true;
    }
}

function ValidarNif() {
    let nif = document.getElementById("textNif");
    let regexNif = /^\d{9}$/;

    if (!regexNif.test(nif.value)) {
        nif.focus();
        nif.style.color = 'red';
        return false;
    }
    else {
        nif.style.color = 'black';
        return true;
    }
}

function ValidarForm() {
    let message;

    let nome = document.getElementById("textNome");
    let email = document.getElementById("textEmail");
    let telefone = document.getElementById("textTelefone");
    let nif = document.getElementById("textNif");

    if ((nome.value == '') || (email.value == '') || (telefone.value == '') || (nif.value == '')) {
        message = 'Preencha os campos vazios';
    }
    else {
        message = 'Validado';
    }

    document.getElementById("Mensagem").innerHTML = message;
}