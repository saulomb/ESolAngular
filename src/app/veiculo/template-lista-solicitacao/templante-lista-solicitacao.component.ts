import { Component, Input, NgModule, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { VeiculoService } from '../services/veiculo.service';
import { transporteSolicitado } from '../models/transporteSolicitado';
import { SolicitacaoStatus, SolicitacaoStatusNomeMapeamento } from '../models/solicitacaoStatus';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-templante-lista-solicitacao',
  templateUrl: './templante-lista-solicitacao.component.html',
  styles: [
  ]
})
export class TemplateListaSolicitacaoComponent implements OnInit, OnChanges {

  @Input() solicitacaoStatus: SolicitacaoStatus;

  public solicitacoes: transporteSolicitado[];

  private localStorageUtils = new LocalStorageUtils();

  public solicitacaoStatusNomeMapeamento = SolicitacaoStatusNomeMapeamento;
  public solicitacoesStatus = Object.values(SolicitacaoStatus).filter(Number);


  constructor(
     private transporteServico: VeiculoService,
     private router:Router)   {  }




  ngOnInit() {
    
    console.log("Dados do login:",this.localStorageUtils.obterLogin());
    console.log("Se esta logado:",this.localStorageUtils.estaLogado());
    
    
    console.log("Array status:", this.solicitacoesStatus)
    this.buscaSolicitacaoPorLotacaoEStatus(this.solicitacaoStatus);
  }

  ngOnChanges(){
    this.buscaSolicitacaoPorLotacaoEStatus(this.solicitacaoStatus);
  }


  buscaSolicitacaoPorLotacaoEStatus(status: SolicitacaoStatus){
    this.transporteServico.obterMinhasSolicitacoesPorStatus(status)
    .subscribe(
      solicitacoes =>{
        this.solicitacoes = solicitacoes;
        console.log("Solicitacoes por status:",solicitacoes);
      },
      error=>console.log(error)
    );
  }




}




