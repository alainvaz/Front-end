let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaApi)
    livros = await res.json() /* Para a gente conseguir de fato visualizar a resposta dessa promessa precisamos utilizar a palavra await */
    console.table(livros)
    livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}
