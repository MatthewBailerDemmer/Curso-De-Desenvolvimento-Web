//Função que quando é declarada já é chamada, sendo tudo no escopo local dela
//IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será exectudado na hora')
    console.log('Foge do escopo mais abrangente')
})()