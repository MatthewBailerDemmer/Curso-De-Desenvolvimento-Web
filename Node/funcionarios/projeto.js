// Aprenderemos a mexer no arquivo descritor da aplicação o package.json
// npm init -> comando que habilita um user para definir o package.json
// npm init -y -> cria o package.json dando sim para todas as perguntas feitas
// além disso grande parte da importancia do package.json é informar as dependencias necessárias para o projeto rodar
//npm i --save -> baixa uma dependencia e a adiciona no package.json
//^1.04.00 siguinifica que poderá ser atualizado a versão minor(do meio)
//~ permite atualizar apenas versões com o fix diferente 
// o primeiro numero siguinifica a versão major, o segundo a minor e a terceira a fixed
// sem nada ele deixa pegar apenas aquela versão exatamente
// para instalar versões exatas que serão utilizadas apenas em desenvolvimento(-dev): npm i --save-dev axios@17.1 -E
// package-lock.json -> descreve de maneira mais precisa a versão que foi baixa, é interessante commitar