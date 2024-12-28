import { Transacao } from "./Transacao.js";

export type GrupoTrnsacao = {
  label: string;
  transacoes: Transacao[];
};
