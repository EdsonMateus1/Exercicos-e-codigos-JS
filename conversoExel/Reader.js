const fs = require("fs");
const util = require('util');
class Reader {

    //O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
    constructor(){
        this.reader = util.promisify(fs.readFile); // util.promisify tranforma a funcao fs.readfile em uma promisse
    }
    async Read(filePath) {
        try {
            return await  this.reader(filePath, "utf8");
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Reader
