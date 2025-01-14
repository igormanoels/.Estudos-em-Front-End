function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.querySelector('.imagens')

    var data = new Date()
    var mins = new Date()
    var hora = data.getHours()
    var minutos = mins.getMinutes()

    //var hora = 1 //teste

    msg.innerHTML = `Agora são ${hora}:${minutos}hs.`
    
    if (hora <= 5){
        imagem.src = '/Aulas/ex014-imgs/imagem001.png'
        document.body.style.background = 'rgb(1, 31, 58)'
    } else if (hora <= 12){
        imagem.src = '/Aulas/ex014-imgs/imagem002.png'
        document.body.style.background = 'rgb(113, 189, 255);'
    } else if (hora <= 18){
        imagem.src = '/Aulas/ex014-imgs/imagem003.png'
        document.body.style.background = 'rgb(3, 100, 184)'
    } else {
        imagem.src = '/Aulas/ex014-imgs/imagem004.png'
        document.body.style.background = 'rgb(5, 59, 107)'
    }
}
