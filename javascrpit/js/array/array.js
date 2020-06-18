//declarando um array vetor 
//em javascrip o array e heterogeneo

const nun1=[4];

let vetor=[2];

var array=[2,3,5,6];

//acessar quantidade de elementos de um array com a funcao legth conta o tamanho
console.log(nun1.length);
 
//funcao pop tira o ultimo valor do array
console.log(nun1.pop());

//funcao delete deleta elementos do array
delete nun1[1];

/*
O objeto Array do JavaScript é um objeto global usado na
construção de 'arrays': objetos de alto nível 
semelhantes a listas.

*/


//Criando um Array
var frutas = ['Maçã', 'Banana'];
console.log(frutas.length);

//Adicionar um item ao final do Array com fucao push(a mais usada)

var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']

//Remover do início do Array com funcao shift

var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];

// Adicionar ao início do Array com a funcao unshift

var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];

//Procurar o índice de um item na Array

//O método push() adiciona um ou mais elementos ao final de um array e 
//retorna o novo comprimento desse array.


frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']
var pos = frutas.indexOf('Banana');
/*
O método indexOf() retorna o primeiro índice em que o elemento pode ser 
encontrado no array, retorna -1 caso o mesmo não esteja presente.
*/


/*
O método slice() retorna uma cópia de parte de um array 
a partir de um subarray criado entre as posições início(begin) 
e fim(end)(fim não é necessário) de um array original. 
O Array original não é modificado.

Syntaxe
arr.slice([início[,fim]])

Parâmetros


begin Optional
Índice baseado em zero no qual se inicia a extração.
Como um índice negativo, início indica um deslocamento em relação ao fim da sequência. slice(-2) extrai os dois últimos elementos da sequência.
Se início for omitido, slice(fatia) inicia a partir do índice 0.
end Optional
Índice baseado em zero (origem iniciando em zero) o qual é o final da extração. slice extrai até, não incluindo end.
slice(1,4) extrai do segundo até o quarto elemento (elementos de índice 1, 2 e 3).
Como índice negativo, end indica um deslocamento em relação ao fim da sequência. slice(2,-1) extrai o terceiro elemento através do segundo-para-o-último elemento na sequência.
Se end for omitido, slice extrairá considerará o último elemento do array como sendo o end (arr.length).

*/

// Exemplo extrair nossos bons amigos, os cítricos, das frutas
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']




// Usando slice para criar novoCarro a partir de meuCarro.
var meuHonda = { cor: 'vermelho', rodas: 4, motor: { cilindros: 4, tamanho: 2.2 } };
var meuCarro = [meuHonda, 2, 'perfeitas condições', 'comprado em 1997'];
var novoCarro = meuCarro.slice(0, 2);

// Exibe os valores de meuCarro, novoCarro, e a cor de meuHonda
//  referenciado de ambos arrays.
console.log('meuCarro = ' + meuCarro.toSource());  //O método toSource() retorna uma representação string do código fonte do array.


console.log('novoCarro = ' + novoCarro.toSource());
console.log('meuCarro[0].cor = ' + meuCarro[0].cor);
console.log('novoCarro[0].cor = ' + novoCarro[0].cor);

// Altera a cor de meuHonda.
meuHonda.cor= 'roxo';
console.log('A nova cor do meu Honda é ' + meuHonda.cor);

// Exibe a cor de meuHonda referenciado de ambos arrays.
console.log('meuCarro[0].cor = ' + meuCarro[0].cor);
console.log('novoCarro[0].cor = ' + novoCarro[0].cor);

/*
O método split() divide um objeto String em um array de strings ao separar a string em substrings

Sintaxe
str.split([separador[, limite]])

separador
Opcional. Especifica o(s) caracter(es) a serem usados para separar a string. O separador é tratado como uma string ou uma expressão regular. Se o separador é omitido ou não ocorre na string, o array retornado irá conter um elemento consistindo da string inteira. Se o separador for uma string vazia, str será convertido em um array de caracteres.
limite
Opcional. Integer especificando um limite no número de divisões a serem encontradas. O método split() ainda dividirá em cada ocorrência do separador, até que o número de itens divididos corresponda ao limite ou que a string fique aquém do separador.

Valor de Retorno
Um array de strings dividido em cada ponto onde o separador ocorre na string informada.

*/
/*
O exemplo a seguir define uma função que divide uma string em um array de strings usando o separador especificado. 
Depois de dividir a string, a função exibe mensagens indicando a string original (antes da divisão),
o separador usado, o número de elementos no array e os elementos individuais do array.
*/

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('A string original é: "' + stringToSplit + '"');
    console.log('O separador é: "' + separator + '"');
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
  }
  
  var tempestString = 'Oh brave new world that has such people in it.';
  var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
  
  var space = ' ';
  var comma = ',';
  
  splitString(tempestString, space);
  splitString(tempestString);
  splitString(monthString, comma);


/*
Removendo espaços de uma string
No exemplo a seguir, split() procura por 0 ou mais espaços seguidos por um ponto e vírgula seguido por 0 ou mais espaços e, quando encontrar, remove os espaços e os 
pontos e vírgulas da string.  nameList é o array retornado como resultado do split().

*/



var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);