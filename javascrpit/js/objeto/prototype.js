/*
Descrição
Praticamente todos os objetos em JavaScript descendem de Object; todos os métodos e 
propriedades herdados de Object.prototype, embora possam ser sobrescritos 
(exceto um Objeto com protótipo nulo, i.e. Object.create(null)). Por exemplo, 
outros protótipos construtores sobrescrevem a propriedade construtora e fornece 
seus próprios toString() métodos.

Modificações no Objeto protótipo do objeto são propagadas a todos objetos 
através do encadeamento de protótipos, a menos que as propriedades e métodos  
submetidos às mudanças sejam sobrescritos mais além no encadeamento dos protótipos. 
Este recurso oferece um mecânismo muito poderoso apesar de perigoso para sobrescrita e 
extensão de objetos.

*/

function Pessoas(nome,idade,salario){
    this.nome=nome
    this.idade=idade
    this.salario=salario
}

//e melhor colocar os  metodos fora da funcao construtura
//metodos atraves do prototype

Pessoas.prototype.aumento = function (porcentagem){ this.salario = this.salario*porcentagem
}

const p1 = new Pessoas('edson',23,2300);

p1.aumento(6);
console.log(p1);

function Funcionario (nome,dtNac,){
    Pessoas.call(this,nome,idade,salario);
}

Funcionario.prototype = Object.create(Pessoas.prototype)















const objA ={
    chaveA:'A'
}
const objB = {
    chaveB:'B'
}

//Object.setPrototypeOf(obj, prototype);
//definir prototype ou seja o objB esta herdando do objA
Object.setPrototypeOf(objB,objA)
Object.getPrototypeOf(objB);
console.dir(objB);

