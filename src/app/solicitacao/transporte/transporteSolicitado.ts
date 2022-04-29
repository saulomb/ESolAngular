export class transporteSolicitado {
    id: number;
    solicitanteNome:string;
    solitanteLotacaoNome: string;
    dataCadastro: Date;
    parecer: string;
    lotacaoTratamentoNome: string;
    solicitanteTratamentoNome: string;
    solicitacaoStatus: number;
    solicitacaoStatusNome: string;

}


export class transporteDTO{
    id:number;
    values: transporteSolicitado[];
}

// public int Id { get; set; }

// public string SolitanteLotacaoNome { get; set; }
// public string SolicitanteNome { get; set; }
// public DateTime DataCadastro { get; set; }
// public string Parecer { get; set; }
// public string LotacaoTratamentoNome { get; set; }

// public string SolicitanteTratamentoNome { get; set; }