function WorkWithDataTypes() {

  // https://www.w3schools.com/js/js_datatypes.asp
  
  // Tipos de dados permitem trabalhar com variáveis e representam as categorias de dados 
  // com que se trabalha no mundo da programação e das bases de dados
  // As linguagens de programação têm tipos de dados predefinidos (dados primitivos) e variam entre si

  // JavaScript trabalha com:
  /*
      boolean: true ou false      valores lógicos
      number                      valores numéricos, inteiros ou decimais
      string                      texto
      object                      objetos
  */


  // Boleanos
  var valorVerdadeiro = true;
  var valorFalso = false;

  window.alert(valorVerdadeiro);
  window.alert(valorFalso);

  // Numéricos
  var valorInteiro = 1;
  var valorDecimal = 1.5; // em JS o caracter decimal é o ponto (.) e não a vírgula

  var valorGrande = 123e5;  // notação exponencial = 12300000
  var valorPequeno = 123e-5;  // notação exponencial = 0.00123
  
  window.alert(valorInteiro);
  window.alert(valorDecimal);
  window.alert(valorGrande);
  window.alert(valorPequeno);


  // Cadeia de carateres (strings)
  var palavra = 'JavaScript';
  window.alert(palavra);


  /*
  // CLIENTE: declarar tantas variáveis quantos os campos do form --> pouco eficaz e demorado --> usar objetos ou arrays
  var clienteID;
  var clienteNome;
  var clienteNIF;
  var clienteMorada;
  var clienteLocalidade;
  var clienteCodigoPostal;
  var clientePais;
  // .......
  */
  
  
  // Objetos
  /*
  var nomeObjeto = {
    propriedade1: valor,
    propriedade2: valor,
    propriedade3: valor,
  }
  */

  var oldCourse = ['C#', 35]; // 2 linhas

  var curso = {
    nomeCurso: 'Workshop JavaScript', 
    duracaoHoras: 18
  };

  window.alert('O curso chama-se ' + curso.nomeCurso + ' e tem ' + curso.duracaoHoras + ' horas.');

  let cliente = {
    nome: 'MRS',
    NIF: '111111111',
    morada: 'xpto',
    localidade: 'sfm'
  }

  window.alert('O cliente ' + cliente.nome + ' mora em ' + cliente.morada + '.');

  // Tipos de dados nativos / internos JS
  let value = Math.abs(-10);
  let now = new Date();
  document.write(now.getDay());

}


/*
  =   atribuição
  ==  comparação valor
  === comparação valor + tipo
*/

