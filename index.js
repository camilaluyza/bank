class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
    let valorSacado = 200;
    if(this.saldo >= valor){
       this.saldo -= valor;
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

console.log(contaCorrenteCamila.saldo);
contaCorrenteCamila.saldo = 100;
console.log(contaCorrenteCamila.saldo);
contaCorrenteCamila.sacar(50);

contaCorrenteCamila.saldo -= valorSacado;

console.log(contaCorrenteCamila.saldo);
console.log(cliente1);
console.log(cliente2);
