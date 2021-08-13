class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    _saldo; // anderline sinalizando que o atributo não pode ser alterado

    sacar(valor){
    if(this._saldo >= valor){
       this._saldo -= valor;
       }
    }

    depositar(valor){
        if(valor >0 ){
            this.saldo += valor;
        }
    }
}


    const cliente1 = new Cliente();
    cliente1.nome = "Camila";
    cliente1.cpf = 12581757545;
    cliente1.rg = 125478441;

    const cliente2 = new Cliente();
    cliente2.nome = "Luiza";
    cliente2.cpf = 12544757545;
    cliente2.rg = 213494566;

const contaCorrenteCamila = new ContaCorrente();
contaCorrenteCamila.saldo = 0;
contaCorrenteCamila.agencia = 0001;

contaCorrenteCamila.depositar(100);
contaCorrenteCamila.sacar(50);

console.log(contaCorrenteCamila.saldo);
