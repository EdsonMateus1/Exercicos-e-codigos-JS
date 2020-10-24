// usando class
class pessoa {
  constructor(nome) {
    this.nome = nome;
    console.log(this);
  }
  quemEoThis(){
      console.log(this);
  }
  falar() {
    console.log(`meu nome e ${this.nome}`);
  }
}

const p1 = new pessoa(`joao`);
p1.falar();
p1.quemEoThis();
console.log(typeof pessoa);

// usando factory
function pessoa1(nome) {
  return {
    nome,

    falar() {
      console.log("pessoa1", this);
      console.log(`pessoa1  meu nome e ${nome}`);
    },
  };
}

const pessoaTeste = pessoa1("edson");

pessoaTeste.falar();

pessoa1("luiz").falar();

//usando funcao construtora
function pessoas3(nome) {
  console.log(this);
  this.nome = nome;
  this.falar = function () {
    console.log(`meu nome e ${this.nome}`);
  };
}

console.log(new pessoas3("fulano"));

const pe1 = new pessoas3("mateus");
pe1.falar();

function name(params) {
  console.log("this", this);
  console.log(params);
}

const pesonThis = {
  name: "personThis",
};
// call
name.call(pesonThis, "param1");

function qualEoThis(params) {
  let nome = params;
  return () => {
    console.log(this);
    return nome;
  };
}

let o = qualEoThis("edson")();
console.log(o);
