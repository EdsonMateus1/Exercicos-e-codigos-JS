let http = require('http');

http.createServer((req,res) =>{
    res.end('bem vindo');
}).listen(8180);
