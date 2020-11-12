function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 0 && hora < 12){
        img.src = "imagem/foto manha.png"
        mensagem.innerHTML = 'Bom dia.<br>'
        mensagem.innerHTML += `Agora são ${hora}horas.`
    } else if (hora > 12 && hora < 18) {
        img.src = "imagem/foto tarde.png"
        mensagem.innerHTML = 'Boa tarde.<br>'
        mensagem.innerHTML += `Agora são ${hora}horas.`
        document.body.style.background = '#b9846f'
    } else {
        img.src = "imagem/foto noite.png"
        mensagem.innerHTML = 'Boa noite.<br>'
        mensagem.innerHTML += `Agora são ${hora}horas.`
        document.body.style.background = '#515154'
    }
}

