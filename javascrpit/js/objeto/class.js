class Pessoas {
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    get buscarNome (){
        console.log(this);
        return this.nome
        
    }
}

const edson =  new Pessoas ("ed",23)
edson.buscarNome
console.log(edson.idade);
const edson2 = new Pessoas('edson',30)
edson2.buscarNome



// os nomes dos get e set tem que ser diferentes
class Carro {
    constructor (mode,ano)
    {
        this._mode=mode
        this._ano=ano
    }
    get model (){
        return this._mode
    }
}
const palio = new Carro ("fiat",2019);
console.log(palio.model);

for (let i in palio){
    console.log(palio[i]);  
}

var obj = {
    "column01": "Coluna 01",
    "column02": "Coluna 02"
  };
  
  Object.keys(obj).forEach(function(item){
   console.log(item + " = " + obj[item]);
  });
  
  for (var property in obj){
    console.log(property + " = " + obj[property]);
  }

  var obj = {
    "column01": "Coluna 01",
    "column02": "Coluna 02"
  };
  
  for (var [key, value] of Object.entries(obj)) {
      console.log(key + ' ' + value);
  } 