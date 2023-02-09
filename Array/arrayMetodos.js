const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
// retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento ao array
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton') // adiciona ao primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1, 4);
console.log(algunsPilotos1);