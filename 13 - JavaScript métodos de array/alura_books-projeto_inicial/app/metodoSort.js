let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")
btnOrdenarPorPreco.addEventListener('click',ordnarLivrosPorPreco)

function ordnarLivrosPorPreco(){
    let livrosOrdenardos = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenardos)
}