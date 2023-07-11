const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(getFuncionariasChinesas).reduce(menorSalario))
})


const getFuncionariasChinesas = funcionario => funcionario.genero == 'F' && funcionario.pais == 'China'

const menorSalario = (acumulador, atual) => acumulador.salario  < atual.salario ? acumulador : atual;
    