/*
Uma expressão arrow function possui uma sintaxe mais curta
quando comparada a uma expressão de função 
(function expression) e não tem seu próprio this,
arguments, super ou new.target. Estas expressões de 
funções são melhor aplicadas para funções que não sejam 
métodos, e elas não podem ser usadas como construtoras 
(constructors).
*/

(param1, param2, paramN) => { statements }
(param1, param2, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }