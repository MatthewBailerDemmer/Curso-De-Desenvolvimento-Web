let valor// nao inicializada
console.log(valor);


valor = null
console.log(valor)

// console.log(valor.toString()) -> error!

const produto = {}
console.log(produto.preco)// -> undefined pois o objeto foi criado e referenciado apenas o atributo que não
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixe a linguagem atribuir quando necessário
console.log(!!produto.preco)
// delete produto.preco -> essa é a maneira correta de deletar atributos de objetos
console.log(produto)

produto.preco = null // sem preco definido, optar pelo null ao invez do undefined
console.log(!!produto.preco)
console.log(produto)