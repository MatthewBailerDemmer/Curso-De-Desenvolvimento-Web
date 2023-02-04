// é chamada quando um evento acontecer
// neste caso o evento é cada um dos elementos percorridos
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada elemento encontrado no array ele chamará
// a função imprimir
fabricantes.forEach(fabricante =>console.log(fabricante))