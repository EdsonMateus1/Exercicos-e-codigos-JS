/*
O operador condicional (ternário ? ) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.


Sintaxe
            verdadeiro    falso
condition ? expr1 :       expr2


Parâmetros
condition
Uma expressão que é avaliada como true ou false.
expr1, expr2
Expressões com valores de qualquer tipo.



Descrição
Se condition é true, o operador retornará o valor de expr1; 
se não, ele retorna o valor de exp2. Por exemplo, para exibir 
uma mensagem diferente baseada no valor da variável isMember, 
você poderá utilizar o código (statement) seguinte:
*/

//exemplo

const potuacaoUsuario = 500         //condicao  ternario       //true            //false      
const nivelUsuario = potuacaoUsuario >= 1000       ?         'usuario vip ':'usuario basico';
console.log(nivelUsuario);

