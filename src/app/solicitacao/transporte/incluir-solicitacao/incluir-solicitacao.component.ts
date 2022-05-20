import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from '../funcionario';
import { IncluirSolicitacao } from '../incluirSolicitacao';
import { Lotacao } from '../lotacao';
import { TransporteService } from '../transporte.service';

@Component({
  selector: 'app-incluir-solicitacao',
  templateUrl: './incluir-solicitacao.component.html',
  styles: [
  ]
})
export class IncluirSolicitacaoComponent implements OnInit {

  
  solicitacaoForm: FormGroup;
  public solicitacao: IncluirSolicitacao;
  public lotacoes: Lotacao[];
  public requisitanteFuncionario: Funcionario[];
  public passageiroFuncionario: Funcionario[];
  public passageiroSelecinadoId:number;
  public solicitacaoPassageiros: Funcionario[] ;

  constructor(private transporteServico: TransporteService,
    private fb: FormBuilder) { }

  ngOnInit() {

    const userId = 646;
    const lotacaoCadastroId = 16;
    const cadastroNome = "SAULO MENDONÇA BEZERRA";
    const cadastroLotacaoSigla = "CTINF";

    const userAtendimentoId = 21069;
    const lotacaoAtendimentoId = 22;
    const atendimentoNome = "MARCELO MOREIRA CARDOSO";
    const atendimentoLotacaoSigla = "TRANSPORTE";

    this.solicitacaoPassageiros = new Array<Funcionario>();
    
    

    this.solicitacaoForm = this.fb.group({
      solicitacaoUnidadeCadastroId:[lotacaoCadastroId],
      solicitacaoFuncionarioCadastroId:[userId],
      solicitacaoCadastroFuncionarioNome: [cadastroNome],
      solicitacaoCadastroUnidadeSigla: [cadastroLotacaoSigla],
      solicitacaoRequisitanteId: [],
      solicitacaoRequisitanteUnidadeId: [lotacaoCadastroId],
      solicitacaoRequisitanteGestorId: [],
      solicitacaoDataSaida: [],
      solicitacaoDataRetorno: [],
      solicitacaoItinerario: [],
      solicitacaoServicoDescricao: [],
      solicitacaoComMotorista: [],
      
      atendimentoUnidadeResponsavelId: [userAtendimentoId],
      atendimentoGetorReponsavelId:[lotacaoAtendimentoId],
      atendimentoUnidadeSigla:[atendimentoNome],
      atendimentFuncionarioGestorNome:[atendimentoLotacaoSigla]
      


    });

    this.transporteServico.obterLotacoes()
          .subscribe(
            lotacoes =>{
              this.lotacoes = lotacoes;
              console.log("Carregando lotações:",lotacoes);
            },
            error=>console.log(error)
            
          );

    this.buscaRequisitantePorLotacao(lotacaoCadastroId);     
  }


  incluirSolicitacao(){
   
     
    this.solicitacaoForm = Object.assign({}, this.solicitacao, this.solicitacaoForm.value);

        
    console.log(this.solicitacaoForm)

    // this.transporteServico.atendimentoSolicitacao(this.atendimentoSolicitacao).subscribe({
    //   next: data => {
    //       console.log(data);
    //       this.router.navigate(['/solicitacoes'])
    //   },
    //   error: error => {
    //      console.error('There was an error!', error);
    //   }

    // })
  
  }

  buscaRequisitantePorLotacao(lotacaoId: number){

    // console.log("Valor do lotacaoId:",event.target.value)
    // const lotacaoId = event.target.value;
    this.transporteServico.obterFuncionarioPorLotacao(lotacaoId)
    .subscribe(
      funcionarios =>{
        this.requisitanteFuncionario = funcionarios;
        console.log("Carregando Requisitantes:",funcionarios);
      },
      error=>console.log(error)
      
    );

  }

  buscaPassageiroPorLotacao(lotacaoId: number){

    if (lotacaoId == 0) {
      this.passageiroFuncionario = null;
      return
    }
    
    this.transporteServico.obterFuncionarioPorLotacao(lotacaoId)
    .subscribe(
      funcionarios =>{
        this.passageiroFuncionario = funcionarios;
        console.log("Carregando Passageiros:",funcionarios);
      },
      error=>console.log(error)
      
    );

  }

  adicionarPassageiro(funcionarioId: number){

    let funcionario = this.passageiroFuncionario.find(f=> f.id == funcionarioId);
    console.log(funcionario);

    if (this.existePassageiro(funcionarioId)) return
   
    this.solicitacaoPassageiros.push(funcionario);
   
   
   
    //this.solicitacao.passageiros.push(funcionario);
    //console.log(this.solicitacaoPassageiros);
    // this.transporteServico.obterFuncionarioPorId(funcionarioId)
    // .toPromise()
    // .then
    // (
    //   funcionarioEncontrado =>{
    //     funcionario = funcionarioEncontrado;
    //     console.log("Carregando Funcionario:",funcionario);
    //     this.solicitacaoPassageiros.push(funcionario);    
    //   },
    //   error=>console.log(error)
      
    // );

    
    
  }

  removerPassageiro(funcionarioId: number){

    let indexPassageiro = this.solicitacaoPassageiros.findIndex(item => item.id ==funcionarioId);
    if (indexPassageiro <= -1) return;

    //delete this.solicitacaoPassageiros[indexPassageiro];
    //this.solicitacaoPassageiros = this.solicitacaoPassageiros.splice(indexPassageiro,1);
    this.solicitacaoPassageiros = this.solicitacaoPassageiros.filter(f=> f.id != funcionarioId);
    


    console.log( this.solicitacaoPassageiros);

   // this.solicitacaoPassageiros.pop();

  }

   existePassageiro(funcionarioId: number): boolean {
    let funcionarioEncontrado = this.solicitacaoPassageiros.find(f=> f.id == funcionarioId);

    return funcionarioEncontrado != null;
    
    }

}
