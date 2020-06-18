/*
O laço for...in  interage sobre propriedades
enumeradas de um objeto, na ordem original de
inserção.  O laço pode ser executado para cada 
propriedade distinta do objeto.

Syntax

variavel
Uma propriedade diferente do objeto é atribuida em cada iteração.
objeto
Objeto com as propriedades enumeradas.

for (variavel in objeto) {...
}

*/

//Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  } 
}

// Output:
// "obj.color = red"



