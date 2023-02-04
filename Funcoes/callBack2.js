const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar o callBack

const notasBaixas1 = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callBack
 const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})//filtra os determinados elementos do array em cima de um critério
// que vai ser uma função callBack que vai retornar true ou false
// função filter não altera o array originals

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

// eventos do tipo onClick são funções callBack