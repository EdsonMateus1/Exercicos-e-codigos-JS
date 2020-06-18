const express = require('express');

const app = express();

//criando uma roda com get

app.get('/', (req, res) => {
    res.sendFile('');
});

//criando um parametro nao obrigatorio  '/canal/:artigo?'(artigo tem um ?(interrogacao) por isso e um parametro nao obrigatorio)
app.get('/canal/:nome?/:sobrenome?', (req, res) => {
    //  REQ DADOS ENVIADOS PELO USUARIO
    //  RES DADOS EVIADO COMO RESPOSTA AO USUARIO PELO SERVIDOR
    let nome = req.params.nome;

    let sobrenome = req.params.sobrenome;

    if (nome && sobrenome) {
        res.send(` seu nome ${nome} e seu sobrenome e ${sobrenome}`);
    } else {
        res.send('bem vindo ao canal');
    }
});
//Query params (pelo fato dos query params serem livres eles nao sao utilizados em geral e utilizado os parametros fixox em rota)
// passando o query params http://example.com/articles? ( query params) -> sort=ASC&page=2
app.get('/canal', (req, res) => {

    let canal = req.query['canal'];

    if (canal) {
        res.send('canal');
    } else {
        res.send('nenhum canal fornecido')
    }
});


//abrir o servidor sempre e a ultima coisa
app.listen(4040, erro => {
    if (erro) {
        console.log(erro);
    }
    else {
        console.log('servidor ok');
    }
});


