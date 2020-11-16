function verifica() {
    var paistxt = window.document.querySelector('input#paistxt')
    var res = window.document.querySelector('div#res')
    var resultadoPais = String(paistxt.value)

    res.innerHTML = `Voce mora em ${resultadoPais}`
}