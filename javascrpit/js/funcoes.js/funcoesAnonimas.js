//funcao anomina e uma funcao sem nome

//explicado a sintaxe 
//variavel soma que foi declarada assim (const soma)
//recebeu uma funcao anomina(sem nome) apenas usado a palavra function


const soma = function (x, y) {
    return x + y
}


//chamando a funcao soma dentro da funcao imprimirResultado

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));

}
imprimirResultado(3, 4)
imprimirResultado(3, 6, soma)

//passando uma funcao anonima diretamente a outra funcao
//recurso muito comum em JS
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

//passando uma funcao arrow 
//a funcao arrow sempre sera anonima
imprimirResultado(3, 6, (x, y) => x * y)
