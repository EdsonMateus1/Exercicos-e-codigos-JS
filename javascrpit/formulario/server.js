const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
//configurando aquivos estaticos
app.use(express.static('public'));
//configurando roda principal 
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'view/index.html'));//monstrando caminho do aquivos index.html a ser renderizado

});

//configurando porta para receber o formulario
app.post('/saveForm', (req, res) => {
    console.log(req.body);
    res.send('Incluido');
});

app.listen(4000,err =>{
    if(err){
        console.log(err);
    }else{
        console.log("servidor rodando");  
    }
});
