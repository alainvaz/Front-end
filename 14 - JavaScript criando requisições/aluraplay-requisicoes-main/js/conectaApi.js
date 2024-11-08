/* 
Função assíncrona > por padrão o Javascrip é síncrono, ou seja, ele vai ler linha por linha
e não vai esperar nada ser resolvido.

Como decladrado como async e temos o await fetch, o Javascript vai esperar terminar o fetch 
terminar o que tem para fazer e retornar o resultado.

O Fetch é assíncro e tem como parâmetro obrigatório a URL. é uma promessa de que algo vai acontecer alguma hora.
A promessa pode ser resolvida ou rejeitada.

Quando não temos outros parâmetros, usamos requisão GET.
*/
async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    console.log(conexaoConvertida)

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem){
    
    const conexao = await fetch("http://localhost:3000/videos",{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizacoes`,
            url: url,
            imagem: imagem
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possível enviar o Vídeo");
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
 
}
    
async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}