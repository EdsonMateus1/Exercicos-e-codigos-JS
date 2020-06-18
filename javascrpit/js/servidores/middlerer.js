//padrao middleware 
const passo1 = (dados, next) => {
    dados.valor1 = 'mid1';
    next();
};
const passo2 = (dados, next) => {
    dados.valor2 = 'mid2';
    next();
};

const passo3 = dados => dados.valor = 'mid3'

const execucao = (dados, ...middlewares) => {
    const execucaoPasoo = indece => {
        middlewares && indece < middlewares.length &&
        middlewares[indece](dados, () => execucaoPasoo(indece + 1));
    }
    execucaoPasoo(0);
};

const dados = {};
execucao(dados,passo1,passo2,passo3);

console.log(dados);
