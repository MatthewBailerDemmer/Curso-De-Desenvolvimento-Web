const moduloA = require('../../moduloA') // Não respeitar as letras maiusculas e minusculas funcina no windows, mac menos no linux
console.log(moduloA.ola)

//const moduloA = require('D:\Curso_De_Desenvolvimento_Web\Node\ModuloA.js') -> acessando por caminho absoluto

//Podemos importar os módulos que já vem previamente instalados com o node, os módulos core


const c = require ('./pastaC/index')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/