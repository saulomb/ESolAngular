import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { DetalheSolicitacao } from '../detalheSolicitacao';
import { TransporteService } from '../transporte.service';

@Component({
  selector: 'app-detalhe-transporte',
  templateUrl: './detalhe-transporte.component.html'

})


 

export class DetalheTransporteComponent implements OnInit {

 
  
  
 
  constructor(
              private transporteServico: TransporteService,
              private activeRouter: ActivatedRoute) {
               }

  public detalheSolicitacao: DetalheSolicitacao;

  ngOnInit(): void  {

  //  const routeParams = this.activeRouter.snapshot.paramMap;
  //  const solicitacaoId = Number(routeParams.get('Id'));

  //  this.obterDetalheSolicitacao(solicitacaoId);
  
   this.activeRouter.params.subscribe(routeParams => { 
		// this.loadUserDetail(routeParams.id); 
    console.log(routeParams.Id);
    this.obterDetalheSolicitacao(routeParams.Id);
    
	});
   
   

  }

  

  obterDetalheSolicitacao(solicitacaoId: number){
    this.transporteServico.obterDetalheSolicitacao(solicitacaoId)
    .subscribe(
      detalheSolicitacao =>{
        this.detalheSolicitacao = detalheSolicitacao;
        console.log("Detalhe solicitação:" ,this.detalheSolicitacao);
      },
      error=>console.log(error)
      
    );
  }

}
