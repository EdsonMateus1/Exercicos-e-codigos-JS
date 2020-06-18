function soma (nun1){
    if (nun1<2){
        return nun1
    }

    return soma(nun1-1) + soma(nun1-2)

    
    
}

console.log(soma(40));

