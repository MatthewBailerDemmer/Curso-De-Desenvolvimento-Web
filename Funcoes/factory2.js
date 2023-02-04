function criarProduto(nome, preco){
    return {
        nome, // não precisa nome: nome pois ele já vem no parâmetro
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NoteBook', 2199.49))
console.log(criarProduto('iPad', 1199.49))