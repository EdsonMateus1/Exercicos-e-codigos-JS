//sempre lebrar de salvar o aquivo Ctrl+s


//declarando um objeto de forma literal
const prod1 = {};
//criando objeto de forma literal
prod1.nome = 'celular ulta mega'
prod1.preco = 4999.90;
console.log(prod1);

//////////////////////////////////////////////////////

//declarando de forma literal
const prod2 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25
    //usar virgula para semparar os atributos
};
//acessar atributos do objeto
console.log(prod2.nome);
console.log(prod2.sobrenome);


////////////////////////////////////////////////////////////


//objeto que contem uma funcao 
const pessoa1 = {
    tipo: 'edson',
    idade2: 25,
    //funcao dentro de um objeto e chamada de metodo 
    //nao esquecer de usar a virgula para separar os atributos e metodos do objeto
    fala() {
        console.log('ola mundo');
    }
}
//executando metodo que esta dentro do objeto
pessoa1.fala();
console.log(typeof pessoa1);

////////////////////////////////////////////////////////////////////

// objetct em JS costrutor

const obj2 = new Object
obj2.datanasc

/////////////////////////////////////////////////////////////

//funcoes contrutoras de objeto

function produto(nome, preco, desc) {
    this.nome = nome
    this.getprecoCOMdesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new produto('caneta', 7.99, 0.15)
console.log(p1);


////////////////////////////////////////////

//funcao factory ,e uma funcao usada para criar objetos
//sempre usar o retunr com as chaves 

function criarFuncionario(nome, salarioBase, Faltas) {
    return {
        nome,
        salarioBase,
        Faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - Faltas)
        }
    }
}
const f1 = criarFuncionario('joa', 7800, 4);
console.log(typeof criarFuncionario);
console.log(f1.getSalario());


// objeto.Create

const filha = Object.create(null)
filha.nome = 'maria'

/*Método get
Quando formos acessar, “pegar” alguns atributos da classe, devemos utilizar os métodos GET. 
Esse método sempre retornará um valor, seja ele String, int ,double etc. Então 
devemos criar uma função. Vejamos:

Método set
Para alterarmos, modificarmos os valores de um atributo da classe de maneira protegida,
 utilizamos os métodos SET. Esse método não terá um retorno, pois o atributo será somente modificado,
  criando um método de tipo VOID, sem retorno
. Porém ele deve receber algum argumento para que possa ocorrer a devida alteração */


const edson1 = {
    //chave   /valor
    nome: "edson",
    idade: 23,
    falar() {
        console.log(this.nome);

    }
}

edson1.falar()

function fabricadeED(nome, idade, saudadacao, valor, _salario) {
    return {
        nome,
        idade,
        saudadacao,
        valor,
        _salario,
        get salario1() {
            return _salario
        },
        falar() {
            console.log(saudadacao);
        }
    }
}

const edson2 = new fabricadeED('edson', 20, 'oi', 2000, 4000)
edson2.falar()
console.log(edson2.salario1);

// usando classe
class lancamento {
    constructor(nome1 = 'generico', valor2 = o) {
        this.nome1 = nome
        this.valor2 = valor
    }
}


class bruna {
    nome
    idade
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const bruna1 = new bruna('linda', 19)

console.log(typeof bruna1);
console.log(typeof bruna);
console.log(bruna1);

//construras
function Pessoas(nome, datNac, peso, altura) {



    this.nome = nome
    this.datNac = datNac
    this.peso = peso
    this.altura = altura


}

const eu = new Pessoas("edson", "17/02/1996", 68.0, 1.70)
console.log(typeof eu);
console.log(typeof Pessoas);


//Factory
function CriasGente(nome, idade) {
    return {
        nome, idade
    }
}

const gente1 = CriasGente("edson", 24)