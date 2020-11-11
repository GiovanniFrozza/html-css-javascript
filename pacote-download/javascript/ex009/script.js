function verifica() {
    var pais = window.document.querySelector('input#paistxt')
    var res = window.document.querySelector('div#res')

    res.innerHTML = `Voce mora em ${pais}`
}