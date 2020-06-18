const mapa = new Map()
const arrayParaMapas = [1, 2, 3, 4, 5, 6]

mapa.set("chave1", { valor: 10 });
mapa.set("chave2", 10);
mapa.set("chave3", [1, 2, 3, 4]);
mapa.set("chave4", arrayParaMapas);
mapa.set("chave5", { valor: [1, 2, 3] });

console.log(mapa.get("chave1").valor);
console.log(mapa.get("chave2"));
console.log(mapa.get("chave3"));
console.log(mapa.get("chave4"));
console.log(mapa.get("chave5"));

console.log(mapa);


const chavesVariadas = new Map([
    ["chave", "valor"],
    [function () { }, "funcao"],
    [ { }, "objetos"],
    [123, "numero"],
]);

chavesVariadas.forEach((valor,chave) =>{
    console.log(chave,valor)
})