const menorValor = 1
const maiorValor = 100
const numeroSecreto = geraNumeroAleatorio()

function geraNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor  + 1)
}

console.log('numero secreto: ', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor