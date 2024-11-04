function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{          
        alert('Elemento não encontrado ou seletor inválido!')
    }
    
}
const listaDeTeclas = document.querySelectorAll('.tecla')

/*
usando for
*/

for(let contador = 0; contador < listaDeTeclas.length;contador++){
    
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    console.log(instrumento)

    // template String: '#som_{instrumento}'
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    console.log(contador)

    tecla.onkeydown = function(evento){
        console.log(evento.code)

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

/* usando while
let contador = 0

while(contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    console.log(instrumento)

    // template String: '#som_{instrumento}'
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador++;
    console.log(contador)
}

*/

/* forma opcional, mas também trabalhosa
listaDeTeclas[0].onclick = tocaSomPom;
*/

/* Forma trabalhosa para fazer todos os botões a tocarem música
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim (){
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff (){
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash (){
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim (){
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh (){
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic (){
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom (){
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/