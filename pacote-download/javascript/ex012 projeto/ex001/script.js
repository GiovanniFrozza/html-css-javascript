function contar() {
    let inicio = window.document.querySelector('input#iniciotxt')
    let fim = window.document.querySelector('input#fimtxt')
    let passo = window.document.querySelector('input#passotxt')
    let res = window.document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Preencha os campos acima.`
        // window.alert('Você precisa preencher todos os campos.')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            res.innerHTML = `O passo nao pode ser 0. Considerando passo valendo 1!`
            p = 1
        }
        if(i < f) { //contagem crescente.
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { //contagem regressiva.
            for(let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}