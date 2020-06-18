/*
A sintaxe de get associa uma propriedade de 
um objeto a uma função que será chamada quando tal propriedade é acessada.
Sintaxe
{get prop() { ... } }
{get [expression]() { ... } }
 

Parâmetros
prop
O nome da propriedade à qual a função dada será associada.
expression
A partir do ECMAScript 6, você pode também utilizar expressões para um nome computado de uma propriedade para associar à função dada.

Descrição
Às vezes é desejável que se permita acesso a uma propriedade que retorna um valor computado dinamicamente, ou você pode querer refletir o status de uma variável interna sem requerer o uso de chamadas de método explícitas.
Em Javascript, isso pode ser feito com o uso de um getter. Não é possível simultaneamente ter um getter associado a uma propriedade e a mesma possuir um valor, embora seja possível usar um getter e um setter em conjunto para criar algo como uma pseudo-propriedade.

Note o seguinte quando for trabalhar com a sintaxe get:

Pode haver um identificador que seja um número ou uma string;
Deve haver exatamente zero parâmetros (veja  Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments para mais informações)
Não deve haver mais de um getter para a mesma propriedade nem uma propriedade comum como o mesmo nome do getter ({ get x() { }, get x() { } } and { x: ..., get x() { } } são proibidos).
Um getter pode ser removido usando o operador delete.


Quando formos acessar, “pegar” alguns atributos da classe, devemos utilizar os métodos GET. Esse método sempre retornará um valor,
seja ele String, int ,double etc. Então devemos criar uma função. Vejamos:

 */

//exemplos
var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log (obj.latest); // Retornará "test".
//Se você quer remover um getter, você pode apenas utilizar delete.
delete obj.latest;


/*
Definindo um getter em objetos existentes usando defineProperty
Para adicionar um getter a um objeto existente a qualquer momento, use Object.defineProperty().

*/
var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Executa o getter, que retornará a + 1 (which is 1)