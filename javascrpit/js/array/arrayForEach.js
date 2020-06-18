/*forEache
O forEach executa o callback fornecido uma vez
para cada elemento da ordem com um valor atribuido.
 Ele não é invocado para propriedades de índices que
 foram deletados ou que não foram inicializados (por ex. 
 em arrays esparsos).
 
Sintaxe
array.forEach(callback(currentValue [, index [, array]])[, thisArg]);

callback é invocado com três argumentos:

o valor do elemento
o índice do elemento
o array que está sendo percorrido

forEach() executa a a função callback uma vez para cada elemento do array –
diferentemente de map() ou reduce(), ele sempre retorna o valor undefined e não é encadeável. 
O caso de uso típico é alterar o array no final do loop.





Parâmetros
callback
Função para executar em cada elemento, recebendo três argumentos:
currentValue
O valor atual do elemento sendo processado no array.
index Optional
O índice do elemento atual sendo processado no array.
array Optional
O array que forEach() está sendo aplicado.
thisArg Optional
Opcional. Valor a ser usado como this quando executar callback.
*/

const arrayAprovados = ['ed','eu','bruna','vitor'];
const arrayEdson =[4,2,3,4]

//sintaxe forEache
arrayAprovados.forEach(function(valor,index,array){
    console.log(valor,index,array);
});

arrayEdson.forEach((nome,index,array) =>{
    console.log(` nome = ${nome} index = ${index} array = ${array}  `);
}) 



    

