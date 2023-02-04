function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 !!(trabalho1 ^ trabalho1) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //xor (ou exclusivo)
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // podemos omitir as chaves do par chave-valor padrão para objetos
    // desta maneira o nome da constante é a chave e o valor é o próprio valor
}

console.log(compras(true, true))