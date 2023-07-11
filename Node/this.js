//this dentro de um módulo aponta para module.exports, dentro de uma função ele aponta para global
// dentro de uma função arrow function o this aponta para module.exports/exports
console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...'
}

logThis()