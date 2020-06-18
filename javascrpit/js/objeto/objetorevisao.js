//colecao de dinamica de pares chaves/valor

const produto = new Object()
produto.nome = 'cadeira'
produto.marca = 'intel'
produto.preco = 220

//criacao literal de um objeto
const carro = {
    modelo: 'palio',
    valor: 10000,
    propietario: {
        nome: 'raul',
        idade: 35,
        endereco: {
            logradouro: 'rua tal',
            numero: 123
        }
    },
    // array com objeto   
    condutores: [{
        nome: 'fulano',
        idade: 23,
    }, {
        nome: 'alguem',
        idade: 42
    }]
}
console.log(carro);
console.log(typeof carro);


//delete usado para deletar intens do objeto
delete carro.condutores
delete carro.propietario.endereco


edson = {}
edson.bonito
console.log(typeof edson);
