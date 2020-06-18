/*
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.


Sintaxe
for (variavel of iteravel) {
  declaração
}


variável
A cada iteração, um valor de uma propriedade diferente é atribuido à variável.
iteravel
Objeto cujos atributos serão iterados.

*/


let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30