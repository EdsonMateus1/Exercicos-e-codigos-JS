function getPreco(imposto = 0 = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'not',
    preco: 4500,
    des: 0.15,
    getPreco
}