//sintaxe para declarar variaveis
    const nun2=7;
    var nun1=1;
    let nun3=4;
//variavel var ficara visivel para todo o programa fora dos blocos 
//sempre optar por usar let e const
console.log(typeof nun2);

//////////////////////////////////////////////////////////////

//usando var
//var e uma variavel de escopo global 
//exemblo a baixo
var numero=2
{
    var numero=1
    console.log('dentro=',numero);
    
}
console.log('fora =',numero);


////////////////////////////////////////////////////////////

//usando o let
//let tem escopo de bloco,ou seja estara visivel somente no bloc
var teste=1
{
    let teste=2
    console.log('dentro',teste);
    
}
console.log('fora',teste);

//OBS VARIAVEIS DEFININAS COM VAR TEM ESCOPO DE FUNCAO E ESCOPO GLOBAL
//OBS VARIAVEIS DEFININAS COM LET TEM ESCOPO DE FUNCAO ESCOPO GLOBAL E ESCOPO DE BLOCO


////////////////////////////////////////////////////////////
//usando var em loop
for(var i=0;i<10;i++){
    console.log(i);
    
}
console.log('i=',i);

//////////////////////////////////////////////////////////////


//usando let em loop
for(let j=0;j<10;j++){
    console.log(j);
    
}
//console.log('j=',j);

/////////////////////////////////////////////////


//usando var em loop 2
const funcs=[];

for(var m=0;m<10;m++){
    funcs.push(function(){
        console.log('m',m);        
    })
    
}
funcs[2]()
funcs[8]()

////////////////////////////////////////////////////////////

//usando let em loop 2

const func=[]
for(let a=0;a<10;a++){
    func.push(function(){

        console.log('a',a);  
    })
}   
func[2]()
func[8]()