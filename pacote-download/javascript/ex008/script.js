function calcular() {
    var txtvelocidade = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtvelocidade.value)
    res.innerHTML = `<p>Sua velocidade atual é de <span class = 'velocidade'>${vel}Km/h</span>.</p>`
    
    if(vel < 0) {
        res.innerHTML = `Voce digitou ${vel}. Por favor insira um valor valido.`
    } else if(vel < 60) {
        res.innerHTML += `<p>Você esta dentro da lei.</p>`
    } else {
        res.innerHTML += `<p>Você levou multa por excesso de velocidade.</p>`
    }
    
}
