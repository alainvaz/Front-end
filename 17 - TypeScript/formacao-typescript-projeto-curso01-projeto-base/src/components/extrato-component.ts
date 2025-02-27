import Conta from "../types/Conta.js";
import { TipoData } from "../types/TipoData.js";
import { GrupoTrnsacao } from "../types/grupoTransacao.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(
  ".extrato .registro-transacoes"
);

renderizarExtrato();
function renderizarExtrato(): void {
  const gruposTransacoes: GrupoTrnsacao[] = Conta.getGruposTransacoes();
  elementoRegistroTransacoesExtrato.innerHTML = "";
  let htmlRegistroTransacoes: string = "";

  for (let grupoTransacao of gruposTransacoes) {
    let htmlTransacaoItem: string = "";
    for (let transacao of grupoTransacao.transacoes) {
      htmlTransacaoItem += `
                  <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(
                          transacao.valor
                        )}</strong>
                    </div>
                    <time class="data">${formatarData(
                      transacao.data,
                      TipoData.DIA_MES
                    )}</time>
                  </div>
        `;
    }

    htmlRegistroTransacoes += `
        <div class = "transacoes-group">
            <strong class="mes-group">
                ${grupoTransacao.label}
            </strong>
            ${htmlTransacaoItem}
        </div>
    `;
  }
  if (htmlRegistroTransacoes === "") {
    htmlRegistroTransacoes = "<div>Não há transações registradas</div>";
  }
  elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const ExtratoComponet = {
  atualizar(): void {
    renderizarExtrato();
  },
};

export default ExtratoComponet;
