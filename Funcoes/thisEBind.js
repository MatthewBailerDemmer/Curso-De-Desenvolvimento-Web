const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // (saudacao) -> sem o this da erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //-> conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)// a partir dessa função o this será resolvido para 'pessoa'
falarDePessoa(); 