/*
A palavra chave static define um método estático para a classe.

Sintaxe
static nomeDoMetodo() { ... }
Descrição
Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. Métodos estáticos são comumente utilizados como funções utilitárias.

*/
class Pessoas {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`meu nome e ${this.nome} minha idade e ${this.idade}`);

    }
    static humor() {
        console.log('bom humor');

    }
}

const p1 = new Pessoas('edson', 23);
console.log(p1);

const p2 = new Pessoas('bruna', 19);
console.log(p2);
