var a = window.document.getElementById("area")
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() { 
    a.innerText = 'clicou'
    a.style.background = 'green'
}

function entrar() {
    a.innerText = 'entrou'
    a.style.background = 'maroon'
}

function sair() {
    a.innerText = 'saiu'
    a.style.background = 'red'
}