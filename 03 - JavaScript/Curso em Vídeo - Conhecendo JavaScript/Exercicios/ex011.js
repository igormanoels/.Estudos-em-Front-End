/* 
    // EX. 1
var idade = 22
if (idade < 18){
    console.log('Menor de idade')
}else{
    console.log('Maior de idade')

    // EX. 2
var idade = 26
if (idade < 16){
    console.log('Não Vota')
}else{
    if(idade >= 16 && idade < 18){
        console.log('Voto não obrigatório')
    }else
    console.log('Voto obrigatório')
}
}*/

var idade = 13
if (idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 65){
    console.log('Voto Opcional')
// } else if (idade >= 16 && idade < 18){           Outra possibilidade é a condição ser formada por --> (idade < 18) o que deixaria o código mais limpo
//    console.log('Voto não obrigatório')
} else {
    console.log('Voto obrigatório')
}