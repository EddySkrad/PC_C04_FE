function FormLoad() {
    document.calculadora.valor1.focus();
}

function ValidateValor1() {
    let valor1 = document.getElementById('valor1');
    
    if (isNaN(valor1.value) || valor1.value == '') {
        valor1.focus();
        valor1.style.backgroundColor = 'red';
        valor1.style.color = 'white';
        return false;
    }
    else {
        valor1.style.backgroundColor = 'white';
        valor1.style.color = 'black';
        return true;
    }
}

function ValidateValor2() {
    let valor2 = document.getElementById('valor2');

    if (isNaN(valor2.value) || valor2.value == '') {
        valor2.focus();
        valor2.style.backgroundColor = 'red';
        valor2.style.color = 'white';
        return false;
    }
    else {
        valor2.style.backgroundColor = 'white';
        valor2.style.color = 'black';
        return true;
    }
}

function Soma() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let resultado;

    resultado = +valor1 + +valor2;

    document.getElementById('resultado').value = resultado;
}

function Subtracao() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let resultado;

    resultado = valor1 - valor2;

    document.getElementById('resultado').value = resultado;
}

function Multiply() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let resultado;

    resultado = valor1 * valor2;

    document.getElementById('resultado').value = resultado;
}

function Divide() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2');
    let resultado;

    if (valor2.value == 0) {
        let message = "Não é possível dividir por 0";
        document.getElementById('resultado').value = message;
        valor2.focus();
        valor2.style.backgroundColor = 'red';
        valor2.style.color = 'white';
    } else {
        resultado = valor1 / valor2.value;
        document.getElementById('resultado').value = resultado;
        valor2.style.backgroundColor = 'white';
        valor2.style.color = 'black';
    }
}