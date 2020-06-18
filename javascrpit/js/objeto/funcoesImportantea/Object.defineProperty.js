/*
O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

Nota: Você invoca este método diretamente no construtor do Object ao invés de invocar em uma instância do tipo Object.


Sintaxe
Object.defineProperty(obj, prop, descriptor)

Parâmetros
obj
O objeto no qual será definida a propriedade.
prop
O nome da propriedade que será definida ou modificada.
descriptor
O descritor para a propriedade que será definida ou modificada.
Valor de retorno
O objeto que foi passado à função.

Descrição
Esse método permite uma precisa inclusão ou modificação de uma propriedade em um objeto. Enquanto a inclusão de propriedades através de atribuição cria propriedades que são visíveis durante a enumeração (por repetições for...in ou pelo método Object.keys), e cujos valores podem ser alterados e deletados, esse método permite a modificação deste comportamento padrão. Por padrão, valores incluídos utilizando Object.defineProperty() são imutáveis.

Os descritores de propriedades presentes nos objetos se apresentam em duas variedades: descritores de dados e descritores de assessores. Um descritor de dado é uma propriedade que contém um valor, podendo este ser gravável ou não. Um descritor de assessor é uma propriedade definida como um par de funções getter-setter. Um descritor deve ser de uma destas variedades; não pode ser de ambas.

Ambos os descritores de dados e de assessor são objetos. Eles compartilham as seguintes chaves obrigatórias:

configurable
true se e somente se o tipo deste descritor de propriedade pode ser alterado e se a propriedade pode ser deletada do objeto correspondente.
Valor padrão é false.
enumerable
true se e somente se esta propriedade aparece durante enumeração das propriedades no objeto correspondente.
Valor padrão é false.
Um descritor de dados também possui as seguintes chaves opcionais:

value
O valor associado com a propriedade. Pode ser qualquer valor válido em Javascript  (número, objeto, função, etc).
Valor padrão é undefined.
writable
true se e somente se o valor associado com a propriedade pode ser modificada com um operador de atribuição.
Valor padrão é false.
Um descritor de assessor também possui as seguintes chaves opcionais:

get
Uma função que servirá como um getter da propriedade, ou undefined se não houver getter. Quando a propriedade é acessada, esta função é chamada sem argumentos e com this define para o objeto no qual a propriedade é acessada (este pode não ser o objeto sobre o qual a propriedade está definida devido a herança). O valor retornado será usado como valor da propriedade.
Valor padrão é undefined.
set
A função que servirá como um setter para a propriedade, ou undefined se não houver setter. Quando a propriedade é atribuída, esta função é chamada com um argumento (o valor sendo atribuído para a propriedade) e com this configura o objeto através do qual a propriedade é atribuída.
Valor padrão é undefined.
Se um descritor tem  nenhum das chaves value, writable, get e set, ele é tratado como um descritor de dados. Se um descritor tem ambas chaves value ou writable e get ou set keys, uma exceção é lançada.

Tenha em mente que estes atributos não são necessariamente as propriedades do próprio descritor. Propriedades herdadas serão consideradas também. Para garantir que estes padrões sejam preservados, você pode congelar o Object.prototype previamente, declarar todas as opções explicitamente, ou apontar para null com Object.create(null).

*/


// usando __proto__
var obj = {};
var descriptor = Object.create(null); // não herdar propriedades
// não enumerável, não configurável, não gravável por padrão
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// declarando explicitamente
Object.defineProperty(obj, 'key', {
    enumerable: false,   // não enumerável
    configurable: false, // não configurável
    writable: false,     // não gravável
    value: 'static'
});

// reciclando um mesmo objeto
function withValue(value) {
    var d = withValue.d || (
        withValue.d = {
            enumerable: false,
            writable: false,
            configurable: false,
            value: null
        }
    );
    d.value = value;
    return d;
}

// ... e ...
Object.defineProperty(obj, 'key', withValue('static'));

// se o método freeze estiver disponível, prevenir as propriedades
// (value, get, set, enumerable, writable, configurable) de serem
// incluídas ou removidas do protótipo do objeto
(Object.freeze || Object)(Object.prototype)


var o = {}; // Criar um novo objeto


// Exemplo de propriedade de objeto inserida através
// de defineProperty com descritor do tipo dado
Object.defineProperty(o, 'a', {
    value: 37,
    writable: true,//gravavel poder alterar
    enumerable: true,//exibivel monstra a chave
    configurable: true//configuravel
});
// A propriedade 'a' existe no objeto com valor 37

// Exemplo de propriedade de objeto inserida através
// de defineProperty com descritor do tipo assessor
var bValue = 38;

Object.defineProperty(o, 'b', {
    get: function () { return bValue; },
    set: function (newValue) { bValue = newValue; },
    enumerable: true,
    configurable: true
});

o.b; // 38
// A propriedade 'b' existe no objeto com valor 38
// O valor de o.b será sempre idêntico a bValue, a
// menos que o.b seja redefinido

// Você não pode combinar ambos os tipos:
Object.defineProperty(o, 'conflict', {
    value: 0x9f91102,
    get: function () { return 0xdeadbeef; }
});
// lança um TypeError: value existe apenas em descritores
// de dado, get existe apenas em descritores de assessor


/*
O atributo writable
Quando o atributo writable de uma propriedade é 
definido como false, a propriedade é dita "não-gravável".
Seu valor não poderá ser alterado.

*/
var o = {}; // Cria um novo objeto

Object.defineProperty(o, 'a', {
    value: 37,
    writable: false
});

console.log(o.a); // escreve 37

o.a = 25; // Nenhum erro é lançado (no modo strict seria 
// lançado mesmo que o valor fosse o mesmo)

console.log(o.a); // escreve 37. A atribuição não teve efeito.
//
/*Como visto no exemplo, tentativas de escrita em uma propriedade não-gravável 
não alteram seu valor, mas também não lançam erros.
*/



/*
O atributo enumerable
O atributo enumerable de uma propriedade define 
se ela deve ser exibida em uma repetição for...in 
e por Object.keys() ou não.
*/

var o = {};

Object.defineProperty(o, 'a', {
    value: 1,
    enumerable: true
});

Object.defineProperty(o, 'b', {
    value: 2,
    enumerable: false
});

Object.defineProperty(o, 'c', {
    value: 3
}); // o valor padrão para enumerable é false

o.d = 4; // o valor padrão para enumerable é false quando
// a propriedade é criada em uma atribuição

for (var i in o) {
    console.log(i);
}
// escreve 'a' e 'd' (em ordem indefinida)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false


/*
O atributo configurable
O atributo configurable controla ao mesmo se
 uma propriedade pode ser deletada do objeto, 
e se seus atributos (exceto a mudança de writable para 
false) podem ser alterados.

*/
var o = {};

Object.defineProperty(o, 'a', {
    get: function () { return 1; },
    configurable: false
});

Object.defineProperty(o, 'a', {
    configurable: true
}); // lança um TypeError

Object.defineProperty(o, 'a', {
    enumerable: true
}); // lança um TypeError

Object.defineProperty(o, 'a', {
    set: function () { }
}); // lança um TypeError (o atributo set já estava definido)

Object.defineProperty(o, 'a', {
    get: function () { return 1; }
}); // lança um TypeError 
// (mesmo o novo get fazendo exatamente a mesma coisa)

Object.defineProperty(o, 'a', {
    value: 12
}); // lança um TypeError

console.log(o.a); // escreve 1
delete o.a; // Nada acontece
console.log(o.a); // escreve 1

/*
Se o atributo configurable de o.a fosse true,
nenhum dos erros seria lançado e a propriedade
estaria deletada ao final.
*/