//Closure é o escopo criado quando una função é declarada
// Esse escopo permite a função manipular variáveis externas á função
//Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }

    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())