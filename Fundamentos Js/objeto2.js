console.log(typeof Object)
console.log(typeof new Object) //funcao criando um objeto, chamaando um construtor, = console.log(typeof new Object())

const Cliente = function() {}

console.log(typeof Cliente)
console.log(typeof new Cliente) // = console.log(typeof new Cliente())

class Produto {}// ES 2015 (E6)
console.log(typeof Produto)
console.log(typeof new Produto)// = console.log(typeof new Produto())
