//Serve para transformar um array em outro por um paramatro acumulado resultado de uma função sempre sendo passado para a próxima
// recebe função callback, valor inicial, indicie do elemento autal, array da função reduce executada
// se não for passado  o valor inicial ele assume como o valor de indice 0
// se não passado o indicie do elemento atual ele assume como 1
// tem a idéia de agregar valores
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false  },
    { nome: 'Maria', nota: 9.2, bolsista: true  },
    { nome: 'Pedro', nota: 9.8, bolsista: true  },
    { nome: 'Ana', nota: 8.7, bolsista:true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)