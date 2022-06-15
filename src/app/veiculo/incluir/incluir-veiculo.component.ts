import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/conta/models/usuario';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { Funcionario } from '../models/funcionario';
import { IncluirSolicitacao } from '../models/incluirSolicitacao';
import { Lotacao } from '../models/lotacao';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-incluir-veiculo',
  templateUrl: './incluir-veiculo.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class IncluirSolicitacaoComponent implements OnInit {

  
  solicitacaoForm: FormGroup;
  public solicitacao: IncluirSolicitacao;
  public lotacoes: Lotacao[];
  public lotacoesPassageiro: Lotacao[];
  public requisitanteFuncionario: Funcionario[];
  public passageiroFuncionario: Funcionario[];
  public passageiroSelecinadoId:number;
  public passageiroLotacaoSelecionadoId:number;
  public solicitacaoPassageiros: Funcionario[] = [] ;

  public gestorLotacaoRequistanteId: number;

  public usuarioLogado: Usuario;
  public lotacaoAtendimento: Lotacao;

  private localStorageUtils = new LocalStorageUtils();

  constructor(private transporteServico: VeiculoService,
    private router:Router,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.usuarioLogado = this.localStorageUtils.obterUsuario();
    this.lotacaoAtendimento = this.localStorageUtils.obterLotacaoAtendimento();

    console.log("Usuario Logado:", this.usuarioLogado);
    console.log("Lotacao Atendimento:", this.lotacaoAtendimento);
    
 
    
    

    this.solicitacaoForm = this.fb.group({
      solicitacaoUnidadeCadastroId:[this.usuarioLogado.lotacaoFisicaId],
      solicitacaoFuncionarioCadastroId:[this.usuarioLogado.id],
      solicitacaoCadastroFuncionarioNome: [this.usuarioLogado.nome],
      solicitacaoCadastroUnidadeSigla: [this.usuarioLogado.lotacaoFisicaSigla],
      solicitacaoRequisitanteId: ['',Validators.required],
      solicitacaoRequisitanteUnidadeId: [this.usuarioLogado.lotacaoFisicaId],
      solicitacaoRequisitanteGestorId: [this.usuarioLogado.gestorResponsavelId],
      solicitacaoDataSaida: ['',Validators.required],
      solicitacaoDataRetorno: ['',Validators.required],
      solicitacaoHoraSaida: ['',Validators.required],
      solicitacaoHoraRetorno: ['',Validators.required],      
      solicitacaoItinerario: ['',Validators.required],
      solicitacaoServicoDescricao: ['',Validators.required],
      solicitacaoComMotorista: [false],
     // solicitacaoPassageiroUnidadeId: [this.usuarioLogado.lotacaoFisicaId],
      
      atendimentoUnidadeResponsavelId: [this.lotacaoAtendimento.id],
      atendimentoGetorReponsavelId:[this.lotacaoAtendimento.gestorResponsavelId ],
      atendimentoUnidadeSigla:[this.lotacaoAtendimento.sigla],
      atendimentFuncionarioGestorNome:[this.lotacaoAtendimento.gestorResponsavelNome]
      

    });

    //this.passageiroSelecinadoId = this.usuarioLogado.lotacaoFisicaId;

    this.transporteServico.obterLotacoes()
          .subscribe(
            lotacoes =>{
              this.lotacoes = lotacoes;
              this.lotacoesPassageiro = lotacoes;
              console.log("Carregando lotações:",lotacoes);
            },
            error=>console.log(error)
            
          );

    this.buscaRequisitantePorLotacao(this.usuarioLogado.lotacaoFisicaId); 
    this.buscaPassageiroPorLotacao(this.usuarioLogado.lotacaoFisicaId);       
  }


  incluirSolicitacao(){
   
     if (this.solicitacaoPassageiros.length == 0)
       {
         alert("Você deve incluir o passageiro antes incluir a solicitação!")
         return;
       }

    if (this.solicitacaoForm.dirty && this.solicitacaoForm.valid){
     
        this.solicitacao = Object.assign({}, this.solicitacao, this.solicitacaoForm.value);
          
        console.log("Form: ",this.solicitacaoForm.value);
        this.solicitacao.passageiros = this.solicitacaoPassageiros;
        console.log("Model: ",this.solicitacao);

        this.transporteServico.incluirSolicitacao(this.solicitacao).subscribe({
          next: data => {
              console.log(data);
              this.router.navigate(['/minhas-solicitacoes'])
          },
          error: error => {
            console.error(error);
          }

        })
    }
  
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
        this.passageiroSelecinadoId = funcionarios[0]?.id;
        console.log("Carregando Passageiros:",funcionarios);
        console.log("Passageiro selecionado:",this.passageiroSelecinadoId);
      },
      error=>console.log(error)
      
    );

  }

  adicionarPassageiro(){
   
    let funcionario = this.passageiroFuncionario.find(f=> f.id == this.passageiroSelecinadoId);
    console.log(funcionario);

    if (this.existePassageiro(this.passageiroSelecinadoId)) return
    
    this.solicitacaoPassageiros.push(funcionario);
    
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


    public setaPassageiroSelecionado(event): void {  // event will give you full breif of action
      this.passageiroSelecinadoId = event.target.value;
      console.log(this.passageiroSelecinadoId);
    }
}
