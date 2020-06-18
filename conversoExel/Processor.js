class Processor {
    static Process(data) {
        
        let linha = data.split("\r\n"); //O método split() divide um objeto String em um array de strings ao separar a string em substrings.

        let rows = linha.map(e => {
            return e.split(",");
        })
        return rows;
    }
    /*A palavra chave static define um método estático para 
    a classe. Métodos estáticos não são chamados na instâncias da 
    classe. Em vez disso, eles são chamados na própria classe. Geralmente, 
    são funções utilitárias, 
    como funções para criar ou clonar objetos. */
}
module.exports = Processor;