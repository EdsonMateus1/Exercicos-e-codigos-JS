const cliente = [
    {
        nome: 'edson',
        tec: ['js', 'css', 'html']
    },
    {
        nome: 'mateus',
        tec: ['css', 'html', 'js']
    }
]

//console.log(`${cliente[0].nome} ${cliente[0].tec[0]}  `);

cliente.map(e => {
    console.log(e.nome);

})
let velhoState = 
    {
      pay : {  
        l1: 'js',
        l2: 'php',
        l3: 'css',
      }
    }

let velhoState2 = ['C#', 'GO', 'PY']
let novoState2 = velhoState2 //passa o endereco do locol onde o object velhostate foi alocado,ou seja passagem por referencia que o js faz por padrao

let novoState = {...velhoState.pay} //copia os dados 
//novoState.push('C++')
console.log('velhostate...',{...velhoState});

const {l1} = velhoState.pay
//const {l1} = pay
//const  linovo = l1

//console.log('pay' , linovo);
console.log('pay' , l1);

console.log('velho ', velhoState);
console.log('velho ', velhoState2);
console.log('novo ', novoState);

let nome = "edson";
console.log(nome)

function altera(nome2) {

    return nome = nome2
}
altera('bia')
console.log(nome)
const action = {
    type: {

    }
}
console.log(typeof action.type);

let vetor =  ["ana","bia","edson"]

for (const iterator of vetor) {
    console.log(typeof iterator);
    
}
