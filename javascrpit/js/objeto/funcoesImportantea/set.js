/*
O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

Sintaxe
new Set([iterable]);

Parâmetros
iterable
Se um objeto iterável é passado, todos os seus elementos serão adicionados ao novo Set. Se tal parâmetro não for específicado, ou se seu valor for null, o novo Set estará vazio.

Descrição
Objetos Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no Set pode ocorrer apenas uma vez; ele é único na coleção do Set.

Igualdade de valores
Como cada valor no Set deve ser único, a igualdade será checada e não é baseada no mesmo algoritmo que aquele usado no operador ===. Especificamente, para Sets, +0 (que é exatamente igual a - 0) e - 0 são valores diferentes. No entanto, isto foi modificado na última especificação ECMAScript 2015. Iniciado com o Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) (bug 952870) e pelo  recent nightly Chrome, +0 e -0 são tratados com sendo o mesmo valor em objetos conjunto (Set). Também, NaN e undefined podem ser armazenados em um conjunto Set.


Método set
Para alterarmos, modificarmos os valores de um atributo da classe de maneira protegida,
utilizamos os métodos SET. Esse método não terá um retorno, pois o atributo será somente modificado, 
criando um método de tipo VOID, sem retorno. Porém ele deve receber algum argumento para que possa ocorrer a devida 
alteração. Vejamos na Figura 2:
*/

//exemplo
var meuSet = new Set();

meuSet.add(1);
meuSet.add(5);
meuSet.add("texto");
var o = {a: 1, b: 2};
meuSet.add(o);

meuSet.add({a: 1, b: 2}); // o está referenciando outro objeto

meuSet.has(1); // true
meuSet.has(3); // false, 3 não foi adicionado ao set (Conjunto)
meuSet.has(5);              // true
meuSet.has(Math.sqrt(25));  // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o); // true

meuSet.size; // 3

meuSet.delete(5); // remove 5 do set
meuSet.has(5);    // false, 5 já foi removido

meuSet.size; // 2, nós simplesmente removemos um valor