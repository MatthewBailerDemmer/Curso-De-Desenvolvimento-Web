//Json => Java Script Object Notation != objeto Java Script
//Json é um formato textutal
const prod1 = {} // {} => representa um objeto literalmente
prod1.nome = 'Celular Ultra Mega'// criando atributos dinamicamente
//Objeto é um conjunto de pares: chaves - valores
// Podem haver objetos dentro de objetos
prod1.preco = 4998.80
console.log(prod1)
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço mas é possivel
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', // o nome das chaves deve ser unico dentro do objeto determinado
    preco: 79.90,
    obj: {
        blabla : 1,
        obj: {
            blabla: 2
        }
    }

}

//Json:
'{"nome": "Camisa Polo", "preco": 79.90 '

console.log(prod2)