function calcular() {
    var idade = window.document.getElementById('idadetxt')
    var res = window.document.getElementById('res')
    var a = Number(idade.value)

    res.innerHTML = `${a}`
}