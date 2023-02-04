let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log(`os verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))// é true se o valor atribuido se resolver em true
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = Infinity))

console.log(`os falsos...`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`para finalizar...`)
console.log(!!('' || null || ' '))
console.log('' || null || 'epa')// exibe o unico valor resolvido em verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')