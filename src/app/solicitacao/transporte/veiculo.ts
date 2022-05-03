export class Veiculo {
    id: string;
    UnidadeCadastroId: number;
    UnidadeGestorResponsavelId: number;
    UnidadeTratamentoId: number;
    UnidadeGestorDeliberouId: number;
    UnidadeTratamentoDeliberouId: number;
    FuncionarioCadastroId: number;
    FuncionarioUnidadeGestorResponsavelId: number;
    FuncionarioGestorDeliberouId: number;
    FuncionarioTratamentoDeliberouId: number;
    DataCadastro: Date; 
    DataSaida: Date; 
    DataRetorno: Date; 
    DataParecer: Date; 
    DataDeliberacaoGestor: Date;    
    ServicoDescricao: String;
    Itinerario: string;                
    ParecerFinal: string;                
    SolicitacaoAprovada: boolean;
    SolicitacaoReprovada: boolean;  
    SolicitacaServicoId: number;
    ComMotorista: boolean;                                                                
}
    

