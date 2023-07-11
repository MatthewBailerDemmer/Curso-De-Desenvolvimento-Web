// Como no navegador temos o objeto global Windows, o Node possui o objeto global Global
//console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema legal'
})
// dar um freeze no objeto para que ele não possa ser mais modificado, por questões de segurança
// O sistema de módulos vem justamente para que não modifiquemos mais os objetos globais, mas é possivel