function tabuada() {
    let num = window.document.getElementById('numtxt')
    let tab = window.document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert("Informe um numero valido.")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while(c <= 15) {
            let item = document.createElement('option')// é como se tu tivesse criando uma tag option na select do html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item);
            c++
        }
    }

    
}