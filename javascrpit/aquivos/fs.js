const fs = require("fs");

// ler aquivo no node
fs.readFile("./aquivo", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("Erro na leitura do arquivo");
    }
    else {
        console.log(data);

    }
});

// escrever aquivo no node
fs.writeFile("./aquivo", "NOVO CONTEUDO", err => {
    if (err) {
        console.log("erro na escrita");
    }
})

const fs = require("fs");

// ler aquivo no node
fs.readFile("./usuario.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("Erro na leitura do arquivo");
    }
    else {
        const conteudo = JSON.parse(data);

       
        console.log(conteudo);

        
    }
});

// escrever aquivo no node
fs.writeFile("./aquivo", "NOVO CONTEUDO", err => {
    if (err) {
        console.log("erro na escrita");
    }
})
