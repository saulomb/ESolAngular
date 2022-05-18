import { detalhePassageiro } from "./detalheSolicitacao";
import { Funcionario } from "./funcionario";

export class IncluirSolicitacao {


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
  
    solicitacaoItinerario: string;
    solicitacaoServicoDescricao: string;
    solicitacaoComMotorista: boolean;

    atendimentoUnidadeResponsavelId:number;
    atendimentoGetorReponsavelId:number;
    atendimentoUnidadeSigla:string;
    atendimentFuncionarioGestorNome:string;
   
    passageiros: Funcionario[];

}


// export class Passageiro{
//     transporteId: number;
//     passageiroId: number;
//     unidadePassageiroId: number;
//     passageiroNome: string;
//     passageiroSetorSigla: string;
  
//   }