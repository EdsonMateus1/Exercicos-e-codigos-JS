console.log("comeco");


function greeting(name) {
 
    console.log('ola '+ name) ;
}

function processUserInput(callback){
  let name = 'edson'
  callback(name);
}

console.log("meio");
processUserInput(callback =>{
  console.log(typeof callback);
});
//processUserInput();
console.log("fim");


