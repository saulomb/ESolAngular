import { Component, NgModule, OnInit } from '@angular/core';
//import { Lotacao } from '../models/lotacao';
import { VeiculoService } from '../services/veiculo.service';
import { transporteSolicitado } from '../models/transporteSolicitado';
import { SolicitacaoStatus, SolicitacaoStatusNomeMapeamento } from '../models/solicitacaoStatus';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-veiculo',
  templateUrl: './listar-veiculo.component.html',
  styles: [
  ]
})
export class ListaTransporteComponent implements OnInit {

  
  public solicitacoes: transporteSolicitado[];
  public solicitacaoStatusSelecionado: SolicitacaoStatus;

  private localStorageUtils = new LocalStorageUtils();

  public solicitacaoStatusNomeMapeamento = SolicitacaoStatusNomeMapeamento;
  public solicitacoesStatus = Object.values(SolicitacaoStatus).filter(Number);
  


  constructor(
     private transporteServico: VeiculoService,
     private router:Router) 
  {  

   }




  ngOnInit() {
    
    console.log("Dados do login:",this.localStorageUtils.obterLogin());
    console.log("Se esta logado:",this.localStorageUtils.estaLogado());
    
    if (!this.localStorageUtils.estaLogado())
        this.router.navigate(['/conta/login'])
    
    console.log("Array status:", this.solicitacoesStatus)
    this.buscaSolicitacaoPorLotacaoEStatus(SolicitacaoStatus.CADASTRO);
    
  }


  buscaSolicitacaoPorLotacaoEStatus(status: SolicitacaoStatus){
    this.solicitacaoStatusSelecionado =  status;
    this.mudarStatus(status);
    this.transporteServico.obterMinhasSolicitacoesPorStatus(status)
    .subscribe(
      solicitacoes =>{
        this.solicitacoes = solicitacoes;
        
        console.log("Solicitacoes por status:",solicitacoes);
      },
      error=>console.log(error)
    );
  }

  mudarStatus(event: SolicitacaoStatus){
    this.solicitacaoStatusSelecionado =  event;

  }


}




