import { Cliente } from "./cliente.js";
import {ContaCorrente} from "ContaCorrente.js";
    const cliente1 = new Cliente();
    cliente1.nome = "Camila";
    cliente1.cpf = 12581757545;
    cliente1.rg = 125478441;

    const cliente2 = new Cliente();
    cliente2.nome = "Luiza";
    cliente2.cpf = 12544757545;
    cliente2.rg = 213494566;

const contaCorrenteCamila = new ContaCorrente();
contaCorrenteCamila.agencia = 0001;

contaCorrenteCamila.depositar(100);
contaCorrenteCamila.sacar(50);

const valorSacado = contaCorrenteCamila.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteCamila._saldo);

