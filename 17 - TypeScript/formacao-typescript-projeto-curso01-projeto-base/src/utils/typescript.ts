// tipos primitivos:

let saldo2: number = 3000; /* não podemos declarar como saldo, o typescript aponta erro por já existir essa variável em bytebank.ts*/
let nome: string = "Jujuba";
let isPago: boolean = false;
/*saldo2 = "cachorro"; isso não é permitido no typescript, mesmo o Javascript permitindo*/

/* o any permite recuperar a forma qual o javascript trabalha com a flexibilidade dos atributos das variáveis*/
let qualquer: any = "";
qualquer = 22;

// arrays

const lista = []; // lista de qualquer coisa, é um any
lista.push("Galao da massa", "teste", 22, true, []);

const listaDefinida: number[] = []; // agora temos uma lista apenas numérico

// enums

enum TipoTransacao {
  DEPOSITOT = "Depósito",
  TRANSFERENCIAT = "Transferência",
  PAGAMENTO_BOLETOT = "Pagamento de Boleto",
}

// tipos personalizados (alias) - da forma abaixo, novaTransacao vai ser sempre igual a Transacao

type TransacaoTeste = {
  tipoTransacao: TipoTransacao;
  data: Date;
  valor: number;
};

const novaTransacao: TransacaoTeste = {
  tipoTransacao: TipoTransacao.PAGAMENTO_BOLETOT,
  data: new Date(),
  valor: 0,
};

console.log(novaTransacao);
