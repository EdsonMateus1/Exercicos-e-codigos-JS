const fabricantes = [`mercedes`, `audi`, `bmw`]

//funcao callback 

/*Callback é uma função que é usada como "callback". Ela é tipicamente 
passada como argumento de outra função e/ou chamada quando um evento for acontecido, 
ou quando uma parte de código receber uma resposta de que estava à espera.

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
Aqui está um pequeno exemplo:

*/

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);



function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

/* O método forEach() executará uma função para cada
 elemento presente em um array */

fabricantes.forEach(imprimir)

//usar callback para pecorrer o array e retirar as menores notas

const notas = [7.7, 6.8, 7.9, 4.0, 4.9, 10]

// sem callback
let notasbaixas = []
for (let i in notas) {
    if (notas[i] < 7) { // for in e usado para ler os indeces  do array ou chaves do obejto de maneira mais simples
        notasbaixas.push(notas[i])//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
    }
}
console.log(typeof notasbaixas);
console.log(notasbaixas);

// com callback
const notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasbaixas2);

/*O método filter() cria um novo array com todos os elementos
 que passaram no teste implementado pela função fornecida.*/
