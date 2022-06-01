import { Funcionario } from "./funcionario";

export class IncluirSolicitacao {

    // public constructor(init?: Partial<IncluirSolicitacao>) {
    //     Object.assign(this, init);
    // }


    id: number;
    solicitacaoUnidadeCadastroId: number;
    solicitacaoFuncionarioCadastroId:number;
    solicitacaoCadastroFuncionarioNome: string;
    solicitacaoCadastroUnidadeSigla: string;
  
    solicitacaoRequisitanteId:number;
    solicitacaoRequisitanteUnidadeId:number;
    solicitacaoRequisitanteGestorId:number;
    solicitacaoDataSaida: Date;
    solicitacaoDataRetorno: Date;
    solicitacaoHoraSaida: Date;
    solicitacaoHoraRetorno: Date;
    
    solicitacaoItinerario: string;
    solicitacaoServicoDescricao: string;
    solicitacaoComMotorista: boolean;

    atendimentoUnidadeResponsavelId:number;
    atendimentoGetorReponsavelId:number;
    atendimentoUnidadeSigla:string;
    atendimentFuncionarioGestorNome:string;
   
    passageiros: Funcionario[] = [] ;

}


