import { Lotacao } from "./lotacao";

export class DetalheSolicitacao {
  id: number;
  unidadeCadastroSigla: string;
  unidadeCadastroDescicao: string;
  unidadeGestorSigla: string;
  unidadeGestorDescicao: string;
  unidadeTratamentoSigla: string;
  unidadeTratamentoDescicao: string;  
  funcionarioCadastroNome: string;
  funcionarioGestorNome: string;  
  funcionarioTratamentoNome: string;
  

  dataCadastro: Date;
  dataSaida: Date;
  dataRetorno: Date;
  dataParecer: Date;
  dataDeliberacaoGestor: Date;
  itinerario: string;
  parecerFinal: string;
  solicitacaoAprovada: boolean;
  solicitacaoReprovada: boolean;
  comMotorista: boolean;
  servicoDescricao: string;
  solicitacaoTransporteStatus: number;
  solicitacaoTransporteStatusNome: string;
  
}

