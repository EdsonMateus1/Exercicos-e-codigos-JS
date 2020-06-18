/*
A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction.

Você também pode definir funções assíncronas usando uma expressão async function.

Sintaxe
async function nome([param[, param[, ... param]]]) {
   instruções
}

nome
O nome da função.
param
O nome de um parâmetro a ser passado para a função.
instruções
As instruções que compõem o corpo da função.
D

Descrição
Quando uma função assíncrona é chamada, ela retorna uma Promise.
Quando a função assíncrona retorna um valor, a Promise será resolvida com 
o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor,
a Promise será rejeitada com o valor lançado.
Uma função assíncrona pode conter uma expressão await, que pausa a execução da 
função assíncrona e espera pela resolução da Promise passada, e depois retoma a 
execução da função assíncrona e retorna o valor resolvido.
*/

/*
print()
//main()
main2()
main3();

console.log("estou lendo antes ");
function getResultado(parametro) {
    return new Promise((resolve, reject) => {

        resolve(parametro * 2.5)

    })
};

console.log('estou lendo durante');
function main3() {
    async function main() {
        const res = await getResultado(2)
        console.log(res + ' await resultado');
        console.log('await resultado');
    }
    
    console.log('dentro da funcao async await');
}
function main2() {

    getResultado(2).then((res) => {
        console.log(res + ' promise resultado');

        console.log('resvole');
    });
    console.log('main');

}

function print() {
    setTimeout(() => {
        console.log("estou lendo  dentro do time");
    }, 0);
    console.log("estou lendo print");
}
console.log('fim');

var q = 10
for (let index = 0; index < q; index++) {
    console.log(index)
    q--
    
}

 */
const array = [1, 2, 3]



function promise() {
    return new Promise((resolve, reject) => {


        if (array) {
            resolve( array.map(e => {
                return e
            }))
        }
        else {
            console.log("erro");
            reject()
        }


    })
};

function getResultado(parametro) {
    return new Promise((resolve, reject) => {

        resolve(parametro * 2.5)

    })
};

async function main() {
    const res = await getResultado(2)
    console.log(res + ' await resultado');
    console.log('await resultado');
}

function main2() {

    getResultado(2).then((res) => {
        console.log(res + ' promise resultado');
    });
}
console.log("antes");
promise().then((a) => {
    console.log("the", a)
}).catch()
main()
main2()
console.log("fim");







