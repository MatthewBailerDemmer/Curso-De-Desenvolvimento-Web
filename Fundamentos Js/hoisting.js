console.log('a = ', a)
var a = 2 //ele joga a variavel para cima, hoisting
console.log('a = ', a)

function teste(){
    console.log('b = ', b)
    var b = 2 //ele joga a variavel para cima mesmo dentro de funcao, hoisting
    console.log('b = ', b)
}

teste()

//console.log('c = ', c) -> gera uma erro pois let não gera hoisting
let c = 2
console.log('c = ', c)