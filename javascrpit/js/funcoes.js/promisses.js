/*
Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Como a maioria das pessoas consomem promisses já criadas, este guia explicará o consumo de promisses devolvidas antes de explicar como criá-las.

Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

Por exemplo, em vez de uma função old-style que espera dois callbacks, e chama um deles em uma eventual conclusão ou falha:



Garantias
Ao contrário dos callbacks com retornos de funções old-style, uma promisse vem com algumas garantias:

Callbacks nunca serão chamados antes da conclusão da execução atual do loop de eventos do JavaScript. 
Callbacks adicionadas com .then mesmo depois do sucesso ou falha da operação assincrona, serão chamadas, como acima.
Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados independentemente da ordem de inserção.
Mas o benefício mais imediato da promises é o encadeamento.

*/

//exemplo simples

let promessa = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('sucess');
    } else {
        reject('failed');
    }
});

promessa.then((message) => {
    console.log(`this is in the them ${message}`);

}).catch((err) => {
    console.log(`this is the catch ${err}`);
});

//exemplo sem promisse

const betterDeveloper = 'vanessa';

function whoIsBetterCallback(callback, errorCallback) {
    if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
        errorCallback({
            name: 'this is wrong',
            message: `${betterDeveloper} ? really`
        })
    } else {
        callback({
            name: betterDeveloper,
            message: 'cdfs are the best'
        })
    }
};
//chamando a funcao
whoIsBetterCallback(result => {
    console.log(`${result.name} ? yeaa  ${result.message}`);
}, error => {
    console.log(`${error.nome}  ${error.message}  `);
});

//com promisse

const betterDeveloper1 = 'vanessa';

function whoIsBetterCallback1() {
    return new Promise((resolve, reject) => {

        if (betterDeveloper1 != 'vanessa' && betterDeveloper1 != 'gabriel') {
            reject({
                name1: 'this is wrong',
                message1: `${betterDeveloper1} ? really`
            })
        } else {
            resolve({
                name1: betterDeveloper1,
                message1: 'cdfs are the best'
            })
        }
    })
};
//chamando a funcao para chamar a promisse use o them para resolver e cath para reject
whoIsBetterCallback1()
    .then(result1 => {
        console.log(`${result1.name1} ? yeaa  ${result1.message1}`);
    }).catch(error1 => {
        console.log(`${error1.nome1}  ${error1.message1}`);
    });

    