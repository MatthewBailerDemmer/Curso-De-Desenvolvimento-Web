const fs = require('fs') // ele procura primeiramente nos modules nativos e dpois no node_modules

const caminho = __dirname + '/arquivo.json' // __dirname = nome do diretório atual

//Lendo de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8') // o segundo parâmetro é o encoding
console.log(conteudo)

//Lendo de forma assincrona 
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // é passado como tericeiro parâmetro uma função de callback que é chamada após a leitura do arquivo
    //o primeiro parâmetro da callback é um possivel erro e o segundo é o conteudo retornado
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// é sempre recomendado ler arquivos de forma assíncrona, para não travar o event loop