const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} // nome e constantes são o mesmo

console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAtt3 = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAtt3
console.log(obj3)

const obj4 = {[nomeAttr]: valorAtt3}
console.log(obj4)

const obj5 = {
    funucao1 : function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5)