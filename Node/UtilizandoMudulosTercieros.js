// npm -> Node package manager: Responsável por baixar modulos externos
// ex: npm install JQuery
// código -> npm i lodash
// lodash e as outras instalações ficarão na pasta node_modules
// ao passar para o github não é recomendado passar a pasta node_modules
// no arquivo gitignore estão as pastas que serão ignoradas pelo git
const _ = require('lodash') // essa biblioteca é comumente identificada por underline
// por padrão quando apenas mandamos o nome do modulo ele procura dentro de node modules e o arquivo index.js
setInterval(() => console.log(_.random(1, 1000)), 2000)
// para instalar de forma global: npm i -g nodemon 
// -g é para sinalizar que é de forma global e ela não irá para a pasta nodemodules
//quando já se possui um arquivo package.json npm i automaticamente baixa as dependências especificadas