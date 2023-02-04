const sequencia = {
    _valor: 1, //convenção que deve ser acessada somente internamente
    //mas não impede o acesso
    // quando é chamado o mudado o valor ele automaticamente chama o get ou o set
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
    // JS não aceita sobrecarregamento de métodos, somente nesse caso
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor , sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor , sequencia.valor)

