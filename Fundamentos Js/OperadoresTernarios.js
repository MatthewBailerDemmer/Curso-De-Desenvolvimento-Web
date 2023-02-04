const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado' // isso é uma função kkkkk

console.log(resultado(7.1));
console.log(resultado(6.7));

let a = 3

globalThis.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a);
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports == this)
console.log(module.exports)

//criando uma variável maluca: sem var ou let
abc = 3 //vc coloca a varável direto no escopo global, não faça isso em casa
console.log(global.abc);

//module.exports == {e: 456, f: false, g: 'teste'}
//FUGIIR DO ESCOPO GLOBAL