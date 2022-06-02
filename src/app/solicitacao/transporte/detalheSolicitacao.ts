import { Data } from "@angular/router";
import { Lotacao } from "./lotacao";

export class DetalheSolicitacao {
  
  // constructor(){
  //   this.atendimentoComMotorista ? this.atendimentoComMotoristaStr="Sim" : this.atendimentoComMotoristaStr="Não" ;

  // }
  
  id: number;
  cadastroUnidadeSigla: string;
  cadastroUnidadeDescicao: string;
  cadastroFuncionarioNome:string;
  cadastroData: Date;
  cadastroDataEnvioGestor: Data;

  requisitanteUnidadeSigla:string;
  requisitanteUnidadeDescicao:string;
  requisitanteFuncionarioNome:string;
  requisitanteDataSaida: Date;
  requisitanteDataRetorno: Date;

  requisistanteItinerario: string;
  requisitanteServicoDescricao: string;
  requisistanteComMotorista: boolean;
  requisistanteComMotoristaFormatado:string;
  

  requisitanteGestorUnidadeSigla: string;
  requisitanteGestorUnidadeDescicao: string;
  requisitanteGestorNome: string;  
  requisitanteGestorId: number;
  requisitanteGestorDeliberacaoData: Date;
 
  atendimentoUnidadeSigla: string;
  atendimentoUnidadeDescicao: string;  
  atendimentFuncionarioGestorNome: string;
  atendimentoFuncionarioDeliberouNome: string;
  atendimentoDeliberouData: Date;
  
  
  atendimentoParecer: string;
  atendimentoDataSaidaLiberado: Date;
  atendimentoComMotorista: boolean;
  atendimentoComMotoristaFormatado: string;

  
  
  solicitacaoTransporteStatus: number;
  solicitacaoTransporteStatusNome: string;
  
  passageiros: detalhePassageiro[];
}

export class detalhePassageiro{
  id: number;
  passageiroNome: string;
  passageiroSetorSigla: string;
  passageiroSetorNome: string;


}




