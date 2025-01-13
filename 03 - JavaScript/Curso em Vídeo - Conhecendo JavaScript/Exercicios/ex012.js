var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora}:00 horas`)
if (hora > 0 && hora <= 5){
    console.log(`Agora é de Madrugada`)
} else if (hora >= 6 && hora <= 12){
    console.log('Bom dia!')
} else if (hora >= 13 && hora <= 18){
    console.log('Boa tarde!')
} else if (hora >= 19 && hora <=24) {
    console.log('Boa noite!')
} else{
    console.log('Esse horário não existe na terra!')
}
