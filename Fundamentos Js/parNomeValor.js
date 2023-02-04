// par nome valor
const saudacao = 'Opa'// contexto lexico 1
 

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos sao grupos aninhados de nome/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)