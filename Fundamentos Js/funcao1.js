function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  
imprimirSoma(2, 10, 4, 5, 7, 7, 8)
imprimirSoma()  

function soma(a, b = 0){// b  = 0 é o valor padrão de b caso nao seja passado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())