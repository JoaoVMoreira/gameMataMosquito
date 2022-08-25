//Identificando altura e largura da página

var altura = 0
var largura = 0
var vidas = 1
var tempo = 5

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoTela()

//Criando cronometro
var cronometro = setInterval(function(){

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        alert('Você venceu!')
    }else{
        document.getElementById('cronometro').innerHTML = tempo
        tempo -= 1
    }
}, 1000)

//Posições randomicas
function posicaoRandomica(){

    //Removendo mosquito anterior (caso exista)

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if (vidas > 3){
            window.location.href = 'game_over.html' 
        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    if (posicaoX < 0){
        posicaoX = 0
    }
    if (posicaoY < 0){
        posicaoY = 0
    }

    console.log(posicaoY, posicaoX)

    //Criando elemento HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = alteraTamanho() + ' ' + alteraLado()
    document.body.appendChild(mosquito)
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

}

// Tamanhos aleatorios

function alteraTamanho(){
    var classe = Math.floor(Math.random() * 3)

    if (classe === 0){
        return 'mosquito1'
    }
    if (classe === 1) {
        return 'mosquito2'
    }
    if (classe === 2) {
        return 'mosquito3'
    }
}


// Lado A e lado B

function alteraLado() {
    var classe = Math.floor(Math.random() * 2)

    if (classe === 0) {
        return 'ladoB'
    }
    if (classe === 1) {
        return 'ladoA'
    }
}

// removendo mosquitos a cada ciclo de tempo