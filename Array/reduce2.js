
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true  },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false  },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?
/*const verificaTodosBolsitas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return atual = acumulador? atual : acumulador;
})
console.log(verificaTodosBolsitas)
*/
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// Desafio 2: Algum aluno é bolsista
/*
const verificaBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return atual = acumulador? acumulador : atual;
})
console.log(verificaBolsista)*/

const algumBolsista = ( resultado, bolsista ) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
