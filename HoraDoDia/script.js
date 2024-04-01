function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e8a974'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#a95032'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#243755'

    }
}