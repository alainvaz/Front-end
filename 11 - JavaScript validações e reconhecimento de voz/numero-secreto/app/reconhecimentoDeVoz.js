/*
Sobre A Web Speech API > https://wicg.github.io/speech-api/#speechreco-section
Artigo sobre Web Speech API > https://www.sitepoint.com/introducing-web-speech-api/
Site utilizado na aula > https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
** Using the Web Speech API > https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

*/

const elementoChute = document.getElementById('chute') 

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang ='pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    console.log('aqui')
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    console.log(chute)
    
    elementoChute.innerHTML = `
        <div>
            Você disse:
            <span class="box">${chute}</span> 
        </div>
    `

}

recognition.addEventListener('end', () => recognition.start())