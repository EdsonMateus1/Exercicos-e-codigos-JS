class dispo {
    constructor(nome) {
        this.nome = nome;
        this.ligDes = false;
    }
    ligar() {
        if (this.ligDes) {
            console.log(this.nome + ' ligado');
            return;
        }
        this.ligDes = true;
    }
    desligar() {
        if (this.ligDes) {
            console.log(this.nome + ' desligado ');
            return;
        }
        this.ligDes = false;
    }
}
const table = new dispo("sans")
table.desligar()
table.ligar()
table.desligar()
table.ligar()
console.log(table);

//declarando heranca em classe
class tvSansung extends dispo {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
const tv = new tvSansung("tv","rosa","lg")

console.log(tv);


//heranca com object.creat
const pai = {
    nome: "seila",
    idade: 22,
    cor: 'rosa'
}
const filho = new Object.create(pai)