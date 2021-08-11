class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

 const cliente1 = new Cliente();
 const cliente2 = new Cliente();

 cliente1.nome = "Camila";
 cliente1.cpf = 12581757545;
 cliente1.agencia = 0001;
 cliente1.saldo = 0;

 cliente2.nome = "Luiza";
 cliente2.cpf = 12544757545;
 cliente2.agencia = 0001;
 cliente2.saldo = 0;




console.log(cliente1, cliente2);