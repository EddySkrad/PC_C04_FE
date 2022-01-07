/*

  for (initial value (once); condition (every time); increment/decrement (every time)) {
    // code block to be executed
  }

  array.forEach(function(currentValue, index, arr), thisValue)

  while (condition) {
    // code block to be executed
  }

  do {
    // code block to be executed
  }
  while (condition);

*/


function ForSimples()
{

  var i;
  var text = '';

  for (i = 0; i < 5; i++) { // executar 5 vezes
    text += 'Valor ' + i + '<br>'; 
  }

  document.getElementById('demoFor01').innerHTML = text; // mostra todas as linhas

}

function ForVariaveis()
{

  var nome1 = 'Ana';
  var nome2 = 'Milena';
  var nome3 = 'Amélia';

  var text = nome1 + '<br>' + nome2 + '<br>' + nome3;

  document.getElementById('demoFor02').innerHTML = text;

}

function ForArray()
{

  var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];  // 4 linhas 
  
  var i = 0;
  var len = cars.length // O tamanho (o nº de linhas) do array
  var text = '';

  for (i; i < len; i++) {
    text += cars[i] + '<br>';
  } 

  document.getElementById('demoFor03').innerHTML = text;

}

function ForEachArrayAnonymousFunction() {

  var content = ['HTML 5', 'CSS3', 'Responsive', 'JavaScript'];
  
  content.forEach(function(item, index) {
    document.getElementById('demoForEachAnonymousFunction').innerHTML += (index + 1) + '. ' + item + '<br>';
  } );

  /*
  function Name(par1, par2) {
    // code
  }

  content.forEach(function(item, index) {
    document.getElementById('demoForEachAnonymousFunction').innerHTML += (index + 1) + '. ' + item + "<br>";
  }); 
  */

}

function ForEachArrayFunction() {

  var content = ['HTML 5', 'CSS3', 'Responsive', 'JavaScript'];
  
  content.forEach(ListArray);

  function ListArray(item, index) {
    document.getElementById('demoForEachFunction').innerHTML += (index + 1) + '. ' + item + "<br>";
  }; 

}

// ES6: arrow function ou lambda
function ForEachArrayLambda() {

  var content = ['HTML 5', 'CSS3', 'Responsive', 'JavaScript'];
  
  content.forEach( (item, index) => {
    document.getElementById('demoForEachLambda').innerHTML += (index + 1) + '. ' + item + "<br>"
  } ); 

}

function While() {
  
  var text = '';
  var i = 1;

  // O While não garante que o ciclo seja feito,
  // porque a condição é avaliada no início
  while (i < 10) {
    text += '<br>The number is ' + i;
    i++;  // Não esquecer de incrementar, caso contrário fica 1 loop infinito
  }
  
  document.getElementById('demoWhile').innerHTML = text;
  
}

function DoWhile() {

  var text = ''
  var i = 1;

  // O Do...While garante que o ciclo é feito pelo menos 1 vez,
  // porque a condição só é avaliada no fim
  do
  {
    text += '<br>The number is ' + i;
    i++;
  }
  while (i < 10)
  
  document.getElementById('demoDoWhile').innerHTML = text;

}