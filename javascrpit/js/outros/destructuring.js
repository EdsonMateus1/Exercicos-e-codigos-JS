//novo recurso do ES2015  destructuring

//criando um obejeto
const pessoa={
    nome: 'ana',
    idade:5,
    endereco:{
        logradouro:'rua abc',
        numero: 1000
    }   
};


//usando o operador destructuring para tirar atributos do obejeto
const {nome,idade}=pessoa;
console.log(nome,idade);


//////////////////////////////////////////////////////////

//usando destructuring para estrair elementos de um array
//[a] e a utilizacao do destructuring e [10] e o array
 const [a]=[10]
console.log(a);

//////////////////////////////////////////////////////////////
// destructuring em funcoes 
function rand({min=0,max=1000}){
    const valor=Math.random()*(max-min)+min
    return Math.floor(valor)
}



