// Exemplo do callback no browser
document.getElementsByTagName('body')[0].onclick = function (e){ // 'e' é o evento que
    //possui várias informações uteis, mas para usar-las devmos declarar o evento
    console.log('O evento ocorreu!')
}