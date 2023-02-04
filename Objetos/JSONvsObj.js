// JSON -> Java Script Object Notation
//-> Notação de objetos Java Script (é um formato  textual de dados)
// muito utilizado para interoperabilidade
// Pode ser lido em qualquer linguagem por ser simples

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b:2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": "string" , "c": true, "d": {}, "e": [] }'))

