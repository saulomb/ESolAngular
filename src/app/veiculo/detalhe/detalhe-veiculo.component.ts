import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { DetalheSolicitacao } from '../models/detalheSolicitacao';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-detalhe-veiculo',
  templateUrl: './detalhe-veiculo.component.html'

})


 

export class DetalheTransporteComponent implements OnInit {

 @Output() titulo: string;
  
  
 
  constructor(
              private transporteServico: VeiculoService,
              private activeRouter: ActivatedRoute) {  }

  public detalheSolicitacao: DetalheSolicitacao;

  ngOnInit(): void  {

  //  const routeParams = this.activeRouter.snapshot.paramMap;
  //  const solicitacaoId = Number(routeParams.get('Id'));

  //  this.obterDetalheSolicitacao(solicitacaoId);
  
   this.activeRouter.params.subscribe(routeParams => { 
		// this.loadUserDetail(routeParams.id); 
    console.log(routeParams.Id);
    this.obterDetalheSolicitacao(routeParams.Id);

    console.log("Input Titulo:",this.titulo);
    
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
