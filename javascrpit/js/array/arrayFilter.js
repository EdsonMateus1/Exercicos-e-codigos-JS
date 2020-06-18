/*
O método filter() cria um novo array com todos 
os elementos que passaram 
no teste implementado pela função fornecida.

var newArray = arr.filter(callback[, thisArg])

callback
Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:
element
O elemento que está sendo processado no array.

index
O índice do elemento atual que está sendo processado no array.
array
O array para qual filter foi chamada.
thisArg Optional
Opcional. Valor a ser usado como this durante a execução do callback.

*/

function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtrado é [12, 130, 44]
console.log(filtered);
console.log(typeof filtered);

function numeroPar(valor) {
    return valor % 2 == null;
}

var numero = [50, 4, 56, 13, 10, 2, 32, 342, 3].filter(numeroPar);
console.log(numero);

//maneira mais utilizada usando uma callbak 


/*
Procurando em um array
O exemplo a seguir usa filter() para filtrar o 
conteúdo de um array 
baseado em um critério 
de busca

*/

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
    return fruits.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

const fruits1 = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * 
 * Implementação ES2015
 * Array filters items based on search criteria (query)
 */
const filterItems1 = (query1) => {
    return fruits.filter(el1 => el1.toLowerCase().indexOf(query1.toLowerCase()) > -1);
};

console.log(filterItems1('ap')); // ['apple', 'grapes']
console.log(filterItems1('an')); // ['banana', 'mango', 'orange']



/*
Exemplo: Filtrando entradas inválidas para JSON
O exemplo a seguir usa filter() para criar um JSON filtrado com todos seus elementos diferentes de zero, e id numérico.
*/

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

var invalidEntries = 0;

function filterByID(obj) {
    if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {
        return true;
    } else {
        invalidEntries++;
        return false;
    }
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5



//exercicos retorne do objs quem tiver o nome maior que 5
const pessoas = [
    { nome: 'luiz', idade: 34 },
    { nome: 'gerson', idade: 22 },
    { nome: 'adriano', idade: 34 },
    { nome: 'lusia', idade: 56 }
];//array com objeto

const nomeGrandes = pessoas.filter( obj => {
    return obj.nome.length >=5//para acessar os atributos do obj basta usar a notacao ponto,funcao length conta o tamanho as strings arrays e etc
})

console.log(nomeGrandes);

