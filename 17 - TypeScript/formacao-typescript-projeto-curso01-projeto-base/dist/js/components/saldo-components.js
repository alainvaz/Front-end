import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { TipoData } from "../types/TipoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), TipoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    },
};
export default SaldoComponent;
