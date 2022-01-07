function WorkWithVariables() {

    // https://www.w3schools.com/js/js_variables.asp
    
    // Variáveis são objetos em memória para guardar temporariamente valores de dados
  
    // Para se criar a variável, declara-se o nome e atribui-se um valor
  
    // 1º declarar (camel case --> dataNascimento; pascal case --> DataNascimento)
    let valor1;     // ECMAScript let
    // var valor2;     // tb podem usar: var valor1
  
    // 2º atribuir
    valor1 = 10;    // = operador de atribuição
  
    // OU declarar e atribuir na mesma linha
    let valor2 = 20;    // number = número
    let valor3 = '20';    // string = texto

    // Variável de texto ou string
    let cumprimento = 'Olá';        // pelicas
    let pessoa = "MRS";             // aspas
    let telefone = '961231234';     // formato numérico, mas o tipo de dados é string
  
    // Depois de criada, a variável pode ser usada
    document.write('<hr><p>VARIÁVEIS</p><hr>');
    document.write(valor1 + '<br>');
    document.write(valor2 + '<br>');
    document.write(valor1 + valor2 + '<br>');  // + operador soma qd usado com números
    document.write(valor1 + valor3 + '<br>'); 
    document.write(cumprimento + ' ' + pessoa + '<br>'); // + operador concatenação qd usado com strings  
    document.write(telefone);
  
  }

function WorkWithArrays() {

    // Vetor: Declarar
    let myArray = [1, 1.5, 'MRS'];  // 3 linhas x 1 coluna
    let myAnimals = []; // array vazio

    // Vetor: Atribuir
    myAnimals[0] = 'Dog';   // arrays são zero based
    myAnimals[1] = 'Cat';

    // Matriz: Declarar e Atribuir
    let myCustomer =
    [
        [1, 'Milena', 'g'],  // row 0: id, name, city
        [2, 'B', 'p'],       // row 1
        [3, 'C', 'a']        // row 2
    ];

    // Usar
    document.write('<hr>ARRAYS<hr>');
    document.write(myArray[0] + myArray[1] + '<br>');
    document.write(myArray[2] + '<br>');
    document.write(myAnimals[0] + ' and ' + myAnimals[1] + '<br>');
    document.write(myCustomer[0][1]);

}

function WorkWithObjects() {

    // OOP = POO
    // Objeto duma classe

    // Declarar e atribuir
    let pessoa = {
        nome: 'MRS',            // propriedade: valor
        localidade: 'SFM',
        telefone: '123456789',
        pais: 'hjsdajshjh'
        // para guardar numa propriedade o valor vindo de um form
        // regiao: document.getElementById('textRegiao').value

        // key: value --> dictionary
    };

    pessoa.nome = 'Ana';    // objecto.propriedade = valor

    // document.write('hjasdhjdhjs')    object.method()
    // object.property = valor;     // atribuição
    // object.property;             // ler

    // Usar
    document.write('<hr>OBJECTS<hr>');
    document.write(pessoa.nome + ', ' + pessoa.localidade);

}