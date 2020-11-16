function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifica os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        if(fSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagem/crianca.png')
            } else if (idade >= 11 && idade <= 21) {
                img.setAttribute('src', 'imagem/adolescente.png')
            } else if( idade >= 22 && idade <= 50) {
                img.setAttribute('src', 'imagem/adulto.png')
            } else {
                img.setAttribute('src', 'imagem/idoso.png')
            }
        } else if (fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagem/crianca.png')
            } else if (idade >= 11 && idade <= 21) {
                img.setAttribute('src', 'imagem/adolescente.png')
            } else if( idade >= 22 && idade <= 50) {
                img.setAttribute('src', 'imagem/adulto.png')
            } else {
                img.setAttribute('src', 'imagem/idoso.png')
            }
        }
        res.innerHTML = `${idade} ${genero}`
        res.appendChild(img)
    }
}