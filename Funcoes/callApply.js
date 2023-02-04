function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // atribuimos uma cópa da função para esse objeto com os parâmetros declarados em cima como atributos
    // do próprio objeto. Genial
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro)) // repete o que foi feito acima com apenas utilizado o .call
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))// no call são passados diretamente os parâmetros da função
//primeiramente vem o contexto e depois os parâmetros

console.log(getPreco.apply(global, [0.17, '$'])) // no call é passado primeiramente o contexto e dpois os 
//parâmetros por meio de um array
