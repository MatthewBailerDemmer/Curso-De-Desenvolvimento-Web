class Pessoa {
    constructor(nome){ // Da problema no this
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jõao')
p1.falar()

function Pessoa1(nome) { //Função construtora
        this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa1('Jõao')
p2.falar()



