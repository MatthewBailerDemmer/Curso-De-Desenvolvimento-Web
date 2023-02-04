//Como que se pode alterar atributos de um obbjeto declarado como constante?
const pessoa = {nome: 'Jõao'}
// pessoa aponta para um endereço de memória onde o objeto esta alocado
// pessoa -> 123 -> {...}
pessoa.nome = 'Pedro'// o endereço de memória não é alterado somente o conteudo alocado
console.log(pessoa)

// pessoa <- 456 <- {...}
// tentando fazer a variavel pessoa apontar para um novo endereço de memória
//pessoa = {nome: 'Ana'}
// como pessoa é constante isso da erro
// criar um novo objeto aloca um novo espaço de memória

Object.freeze(pessoa) // Congela o objeto pessoa, não se deixa mais mexer nele
// assim o objeto em si é constante, tentar altera-lo não gera erros, os comandos
// são simplesmente ignorados
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Jõao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)