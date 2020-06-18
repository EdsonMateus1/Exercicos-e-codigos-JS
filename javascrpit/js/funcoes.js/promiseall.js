/*
O método Promise.all(iterable) retorna uma única 
Promise que resolve quando todas as promises no argumento 
iterável forem resolvidas ou quando o iterável passado como 
argumento não contém promises. É rejeitado com o motivo da primeira 
promise que foi rejeitada.

Sintaxe
Promise.all(iterable);

Parâmetros
iterable
Um objeto iterável, como um Array ou String.

Retorno
Uma Promise já resolvida se o iterável passado for vazio.
Uma Promise resolvida assíncronamente se o iterável passado não conter promises. Nota, Google Chrome 58 retorna uma promise já resolvida nesse caso.
Uma Promise pendente em todos os outros casos. Essa promise 
retornada é então resolvida/rejeitada assíncronamente 
(tão logo a pilha esteja vazia) quando todas as promises no dado iterável 
forem resolvidas, ou se alguma das promises for rejeitada. Veja o exemplo 
sobre "Assincronia ou sincronia da Promise.all" abaixo. Os valores retornados 
estarão na ordem em que as promises foram passadas. independentemente da ordem 
em que forem concluídas.
*/

/*

THEN
O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.

Sintaxe
p.then(quandoRealizada, quandoRejeitada);

p.then(function(valor) {
   // sucesso
  }, function(motivo) {
  // rejeitada
});


Parametros
quandoRealizada
Uma Function chamada quando a Promise é cumprida (Sucesso). Essa função tem um argumento, o valor do cumprimento.
quandoRejeitada
Uma Function chamada quando a Promise é rejeitada. Essa função tem um argumento, o motivo da recusa.
Descrição
*/


/*
CATCH
O método catch() retorna uma Promise e lida apenas com casos rejeitados. 
Ele possui o mesmo comportamento de quando chamamos Promise.prototype.
then(undefined, onRejected) (de fato, chamando obj.catch(onRejected) 
internamente é chamado obj.then(undefined, onRejected)).

Sintaxe
p.catch(onRejected);

p.catch(function(motivo) {
   // rejeição
});

Parâmetros
onRejected
Uma Function chamada quando a Promise é rejeitada. Esta função possui um argumento:
reason da rejeição.
      O motivo da rejeição.

A Promise retornada pelo catch() é rejeitada apenas se onRejected cospe um erro ou se o o retorno da Promise foi rejeitada por si mesmo, ou seja, foi resolvida.
Valor de retorno
Internamente chamamos Promise.protoytype.then sobre o objeto que é chamando passando parâmetros como undefined e onRejected no manipulador de eventos. Então retornamos o valor da chamada que é Promise.



*/




//declarando promises

let promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('A promisse 1 foi resolvida');
    }, 2000);
});


let promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('A promisse 2 foi resolvida');
    }, 2000);
});


Promise.all([promise1, promise2])
    .then(([resultado1, resultado2]) => {
        console.log('todas as promises foram resolvidas');
        console.log(resultado1);
        console.log(resultado2);
    })
    .catch(erro => {
        console.log('Uma das promises foi rejeitadas');
        console.log(erro);

    });