// tipos primitivos:
let saldo2 = 3000; /* não podemos declarar como saldo, o typescript aponta erro por já existir essa variável em bytebank.ts*/
let nome = "Jujuba";
let isPago = false;
/*saldo2 = "cachorro"; isso não é permitido no typescript, mesmo o Javascript permitindo*/
/* o any permite recuperar a forma qual o javascript trabalha com a flexibilidade dos atributos das variáveis*/
let qualquer = "";
qualquer = 22;
// arrays
const lista = []; // lista de qualquer coisa, é um any
lista.push("Galao da massa", "teste", 22, true, []);
const listaDefinida = []; // agora temos uma lista apenas numérico
// enums
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITOT"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIAT"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETOT"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETOT,
    data: new Date(),
    valor: 0,
};
console.log(novaTransacao);
