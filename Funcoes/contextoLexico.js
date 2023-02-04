const valor = 'Global'

function minhaFuncao() {
    console.log(valor)

}

function exec(){
    const vaor = 'Local'
    minhaFuncao()
}

exec()

// Uma função carrega com sigo o contexto onde ela foi declarada