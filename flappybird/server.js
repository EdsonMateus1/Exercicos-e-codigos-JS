const express = require('express');

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen('8080', err => {
    if (err) {
        console.log(err);
    } else {
        console.log("servidor rodando: http://localhost:8080");
    }
});