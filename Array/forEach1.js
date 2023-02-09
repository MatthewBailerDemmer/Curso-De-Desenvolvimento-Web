const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // Os parâmetros passados em uma função callback
    // em um forEach são: 
    //o primeiro que ele pega é os valore
    //depois o indice, isso por padrão JS
    // depois ele passa o próprio array
    // depois é só undefined
    console.log(`${indice + 1}) ${nome}`)
    console.log(Array)
})

aprovados.forEach(indice => console.log(indice))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)