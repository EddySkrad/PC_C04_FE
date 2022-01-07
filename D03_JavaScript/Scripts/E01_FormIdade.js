function ValidateAge() {

    // 1. Declarar variáveis: valor da textbox, mensagem
    let age, message;

    // 2. Ler da textbox e atribuir à variável
    //window.document.form.textbox
    age = document.getElementById("Idade18").value;

    // 3. Avaliar o valor da variável da idade e dar a mensagem correcta
    if (isNaN(age) || age <= 18) {
        message = "Idade errada!";
    }
    else {
        message = "Idade ok!";
    }

    // 4. Escrever no ecrã a mensagem
    document.getElementById("pMessage").innerHTML = message;

}