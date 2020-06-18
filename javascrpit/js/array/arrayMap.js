/*
O método map() invoca a função callback passada por 
argumento para cada elemento do Array e devolve um novo 
Array como resultado.

Sintaxe
arr.map(callback[, thisArg])

Parâmetros
callback
Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:
valorAtual
O valor do elemento original do Array de origem. 
indice
O índice do elemento atual que está sendo processado no array.
array
O Array de origem.
thisArg
Opcional. Valor a ser utilizado como o this no momento da execução da função callback.

*/

/*Exemplo: Mapeando um array de números para um array de raízes quadradas
O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.

*/

//var numbers = [1, 4, 9];
//var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]



/*

Exemplo: Mapeando um array de números usando uma função callback que contém um argumento
O código a seguir mostrar como o método map funciona quando a função callback possui apenas um argumento. 
Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original.

*/

//var numbers = [1, 4, 9];
//var doubles = numbers.map(function (num) {
   // return num * 2;
//});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9
//console.log(doubles);


//exercicio

/*
para cada elemento:
retorne apenas uma string com o nome da pessoa
remova apenas a chave nome do obejto
adicione uma chave id em cada obejto
*/

const pessoas = [
    { nome: 'edson', idade: 23 },
    { nome: 'carlor', idade: 40 },
    { nome: 'bruna', idade: 19 },
    { nome: 'ziilma', idade: 56 },
    { nome: 'anotinio', idade: 65 }
];

const array = [1,2,3,4,5,6]

const newArray =  array.map(e => {
    return e *2
} )
console.log(newArray);




/* const Mapeando =  function map (obj) {
    return obj.map(e =>{
        e.idade = 30
        return e
    })
}
Mapeando(pessoas);

console.log(pessoas);
*/

const newPessoas =  pessoas.map(e=>{
    const obj = {...e , idade : 40}
    return obj
})

console.log(pessoas);

console.log(newPessoas);




//OBS PARA REFERENCIAR UM ATRIBUTO DE UM OBJETO DENTO DE UM ARRAY USE A NOTACAO PONTO
//pessoas.forEach(obj => {
   // console.log(obj.nome);
//});

/*const idade = pessoas.map( element =>{

    if(element.idade == 23){
        element.idade = 30
        return element
    }else{
        return element
    }
})
console.log(idade);
 
const id = pessoas.map((obj, indece) => { 

    return(    
    obj.id = indece 
    )

})*/







