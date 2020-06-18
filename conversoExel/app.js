const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParse");
const Writer = require("./Writer");


async function main() {
    const leitor = new Reader();
    const escritor= new Writer();

    const data = await leitor.Read("./planilha.CSV");

    const dataProcesse = Processor.Process(data);

    const table = new Table(dataProcesse);
    
    const html = await HtmlParser.Parse(table);

    escritor.writer(`${Date.now()}.html`,html);
    
}
main()