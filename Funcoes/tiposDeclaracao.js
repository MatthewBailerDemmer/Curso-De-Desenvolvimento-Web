
console.log(soma(3, 4)) // o JS carrega as funções primeiro UAU!
//console.log(sub(3, 4)) -> ERROR pelo tipo de declaração
//console.log(mult(3, 4)) -> ERROR pelo tipo de declaração
// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
     return x * y
}