const porta = 3003
const express = require('express')
const app = espress()
app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'notbook', preco: 123.4 })
})
app.listen(porta, () => {
    console.log(`ok ${porta}.`);
})
