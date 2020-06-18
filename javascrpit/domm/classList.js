/*
O Element.classList é uma propriedade somente leitura que retorna uma coleção DOMTokenList ativa dos atributos de classe do elemento.

Usar classList é uma alternativa conveniente para acessar a lista de classes de um elemento como uma seqüência delimitada por espaço através de element.className.

Sintaxe
const elementClasses = elementNodeReference.classList;
elementClasses é um DOMTokenList que representa o atributo de classe de elementNodeReference. Se o atributo de classe não foi definido ou está vazio elementClasses.length retorna 0. element.classList propriamente dito é somente leitura, embora você possa modificá-lo usando os 
métodos add () e remove ().

Métodos
add( String [, String] )
Adicione valores de classe especificados. Se essas classes já existem no atributo do elemento, elas são ignoradas.
remove( String [,String] )
Remover valores de classe específicos.
item ( Number )
Retorna o valor da classe por índice na coleção.
toggle ( String [, force] )
Quando apenas um argumento está presente: Toggle class value; Ou seja, se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true.
Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o.
contains( String )
Verifica se o valor da classe especificado existe no atributo de classe do elemento.
*/
//Exemplos
// div é uma referência de objeto para um elemento <div> com class = "foo bar"
div.classList.remove("foo");
div.classList.add("anotherclass");

// Se estiver visível, remova-o, caso contrário, adicione-o
div.classList.toggle("visible");

// adicionar/remover, dependendo do teste condicional, i menos de 10
div.classList.toggle("visible", i < 10 );

alert(div.classList.contains("foo"));

// adicionar ou remover várias classes
div.classList.add("foo","bar");
div.classList.remove("foo", "bar");