var agora = new Date()
var diasem = agora.getDay()
console.log(diasem)
/* Para o javascrip os dias da semana seguem o seguinte ordenamento
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
Isso porque ele coompreende os dias da semana como uma matriz, onde cada dia da semana ocupa uma posilção partindo do zero ao final.

diasem = [0,1,2,3,4,5,6] o mesmo que diasem = [dom,seg,ter,qua,qui,sex,sab] */
switch (diasem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;   // Caso essa seja a resposta e não tenha um break, o JS vai considerar como resposta todos os valores após esse case.
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
    default:
        console.log('Dia inválido!!!')
        break;
}
