// contador A & B compartilharam a mesma instancia
const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")
// cotador C & D recebera uma nova instancia  cada um utilizando função factory '()'
const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)