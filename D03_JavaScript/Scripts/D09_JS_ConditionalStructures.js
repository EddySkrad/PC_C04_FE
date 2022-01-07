/*
  https://www.w3schools.com/js/js_if_else.asp

*/

function If() {

  /* Syntax ou sintaxe ou regra de escrita
    if (condition) {
      // código a ser executado se a condição for true
    }
  */

    var valor = 10;

    if (valor < 10) {
      alert('Valor inferior a 10');
    }

    // Porque é que não aparece nada quando se clica no botão?

}

function IfElse() {
  
  /*
    if (condition) {
      // código a ser executado se a condição for true
    else
      // código a ser executado se a condição for false
    }
  */

    var valor = 10;

    if (valor < 10) {
      alert('Valor inferior a 10');
    }
    else {
      alert('Valor igual ou superior a 10');
    }
  
}

function IfElseIf() {

  /*
    if (condition1) {
      //  block of code to be executed if condition1 is true
    } else if (condition2) {
      //  block of code to be executed if the condition1 is false and condition2 is true
    } else if (condition3) {
      //  block of code to be executed if the condition1 is false and condition3 is true
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
    }
  */
  
    var valor = 100; // = atribuição

    if (valor < 10) { // cond1
      alert('Valor inferior a 10');
    }
    else if (valor == 10) { // == comparação
      alert('Valor igual a 10');
    }
    else {
      alert('Valor superior a 10');
    }

}

function Switch() {

  /*
    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }
  */
  
    var valor = 2;

    switch (valor) {
      case 1:   // valor == 1
        alert('Valor igual a 1');
        break;
      case 2:   // valor == 2
        alert('Valor igual a 2');
        break;
      case 3:
        alert('Valor igual a 3');
        break;      
      default:
        alert('Valor superior ou igual a 6');
    }

}

