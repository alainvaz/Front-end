const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')  
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const trocaComecarEPausar = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')
const musica = new Audio('./sons/luna-rise-part-one.mp3')
const beeb = new Audio('./sons/beep.mp3')
const play = new Audio('./sons/play.wav')
const pause = new Audio('./sons/pause.mp3')

let tempoDecorridoEmSegundos = 5
let intervaloID = null

musica.loop = true
musicaFocoInput.addEventListener('change', () =>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

focoBt.addEventListener('click',() =>{
    tempoDecorridoEmSegundos = 5
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click',() =>{
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click',() =>{
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto){

    mostrarTempo()

    /* vai remover o foco em todos os botões e depois será adicionado no próprio evento*/
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src',`./imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície ,<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;    

        default:
            break;
    }
}

const contagemRegressiva = () => {

    if (tempoDecorridoEmSegundos <=0){
        beeb.play()
        alert('tempo finalizado!')
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if(focoAtivo){
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        zerar()
        return
    }

    tempoDecorridoEmSegundos -=1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos )

    mostrarTempo()
    
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if(intervaloID){
        pause.play()
        zerar()
        return
    }
    play.play()
    intervaloID = setInterval(contagemRegressiva,1000)
    iniciarOuPausarBt.textContent = 'Pausar'
    trocaComecarEPausar.setAttribute('src', './imagens/pause.png')

}

function zerar(){
    clearInterval(intervaloID)
    iniciarOuPausarBt.textContent = 'Começar'
    trocaComecarEPausar.setAttribute('src', './imagens/play_arrow.png');


    intervaloID = null
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-br',{minute:'2-digit', second:'2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()