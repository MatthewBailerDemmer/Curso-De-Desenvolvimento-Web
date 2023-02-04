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

const criarPessoa = nome => { // No Browser não temos o problema com o this pois não é utilizado
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jõao')
p2.falar()