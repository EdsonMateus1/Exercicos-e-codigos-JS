//funcao sem retorno
//sempre colocar bons nomes nas funcoes,nome que deixam claro o que a funcao faz
function imprimirsoma(a, b) {
    console.log(a + b);
};
//chamando a funcao
imprimirsoma(2, 3);


//////////////////////////////////////////////////////////////


//funcao com retorno
function soma(a, b) {

    return a + b
};
//chamando a funcao ,que esta retornado a+b 
console.log(soma(2, 3));


//////////////////////////////////////////////////////////


//armazenando uma funcao dentro de uma variavel
//sintaxe const recebe o nome da constande que e atribuida a uma funcao anonima
const soma2 = function (a, b) {
    console.log(a + b);
};
//chamando a funcao anomina pelo nome da variavel 
soma2(2, 3);

//////////////////////////////////////////////


//armazenando uma funcao arrow em um variavel
//na funcao arrow a sintaxe e diminuida substituido o function pelo =>
const som = (a, b) => {
    return a + b;
};
//chamando a funcao
console.log(som(2, 4));

/////////////////////////////////////////////////////////

//=> arrow function da a vantagem de ter uma funcao mais reduzida


///////////////////////////

//funcao de retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2));
