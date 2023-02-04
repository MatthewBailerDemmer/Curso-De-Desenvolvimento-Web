const funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// por não ter escopo de bloco todas as chamadas dão o valor atual de i