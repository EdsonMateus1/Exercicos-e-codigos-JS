const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('bem vindo ao server');
});

app.get('/menu/:social?', (req, res) => {
    let social = req.params.social;
    if (social) {
        res.send('voce entro na aba social do menu');
    } else {
        res.send('voce etro no menu')
    }

});
//abrir o servidor
app.listen(3010, err => {
    if (err) {
        console.log('servidor com erro');

    } else {
        console.log('servidor ok');
    }
});