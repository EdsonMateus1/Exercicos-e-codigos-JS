/*
O método reduce()executa uma função reducer 
(provida por você) para cada membro do array, 
resultando num único valor de retorno.

A função reducer é alimentada por quatro parâmetros:

Acumulador (acc)
Valor Atual (cur)
Index Atual (idx)
Array original (src)
O valor de retorno da sua função reducer é atribuída ao 
acumulador. O acumulador, com seu valor atualizado, 
é repassado para cada iteração subsequente pelo array,
 que por fim, se tornará o valor resultante, único, final.


 Sintaxe
array.reduce(callback[, valorInicial])



Parâmetros
callback
Função que é executada em cada valor no array, recebe quatro argumentos:

Acumulador
O valor retornado na última invocação do callback, ou o argumento Valor Inicial, se fornecido. (exemplo abaixo).
valorAtual
O elemento atual que está sendo processado no array.
indice
O índice do elemento atual que está sendo processado no array.
array
O array ao qual a função reduce() foi chamada.
valorInicial
Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback. Chamar reduce() em uma array vazia sem valor inicial é um erro.

*/

//Soma todos os valores de uma array
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
// total == 6

const numero = [4, 5, 6, 5, 6, 4, 5, 54]

const total = numero.reduce(function (acumulador, valor, indece, array) {

});


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15