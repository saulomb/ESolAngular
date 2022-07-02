export enum SolicitacaoStatus {
    CADASTRO = 1,
    DELIBARACAO_GESTOR = 2,
    DELIBARACAO_TRANSPORTE = 3,
    CANCELADO_PELO_GESTOR = 4,
    SOLICITACAO_APROVADA = 7,
    SOLICITACAO_REPROVADA = 8
    
}


export const  SolicitacaoStatusNomeMapeamento : Record<SolicitacaoStatus, string> = {
    [SolicitacaoStatus.CADASTRO]: "Cadastro",
    [SolicitacaoStatus.DELIBARACAO_GESTOR]: "Enviado para o gestor requisitante",
    [SolicitacaoStatus.DELIBARACAO_TRANSPORTE]: "Aguardando deliberação do Transporte",
    [SolicitacaoStatus.CANCELADO_PELO_GESTOR]: "Cancelado pelo gestor requisitante",
    [SolicitacaoStatus.SOLICITACAO_APROVADA]: "Solicitação Aprovada",
    [SolicitacaoStatus.SOLICITACAO_REPROVADA]: "Solicitação Reprovada",
};

