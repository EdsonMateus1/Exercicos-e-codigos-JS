const express = require('express')
const app = express();


//Operacores principais de uma API
//                CRIAR  LER   ATUALIZAR  APAGAR
// Crud ->        CREAT, READ, UPDADTE,   DELETE
//Express          POST  GET     PUT      DELETE
//
//     rota   funcao que recebe a requisicao e a resposta
app.get('/',(req,res) =>{
    res.send(`
    <form action="/" method="POST">
    <input type="text" name="nome">
    <button>coonfirmar</button>
    `)
});

app.post('/',(req,res) =>{
    res.send('obrigado recebir')
})

//passando a porta
app.listen(3002,() =>{
    console.log('acessar http://localhost:3002');
    
    console.log('servidor rodando na porta 3002');
});