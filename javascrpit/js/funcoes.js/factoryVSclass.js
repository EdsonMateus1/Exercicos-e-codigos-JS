// usando class
class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome e ${this.nome}`);
    }
}

const p1 = new pessoa(`joao`)
p1.falar()
console.log(typeof pessoa);




// usando factory
function pessoa1(nome) {
    return {
        nome,

        falar() {
            console.log("pessoa1",this);
            console.log(`pessoa1  meu nome e ${nome}`);
        }
    }
}
pessoa1('edson')
pessoa1("luiz").falar()


//usando funcao construtora
function pessoas3(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`meu nome e ${this.nome}`);
    }
}

const pe1 = new pessoas3('mateus')
pe1.falar()

function name(params) {
    console.log(this);
    
}
const person = {
    name : "edson",
}
name.call(person)

const fucao = () =>{
    console.log(this);
    return this.nome = "mateus"
}
let  o = fucao()
console.log(o);
