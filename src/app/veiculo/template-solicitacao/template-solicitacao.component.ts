import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalheSolicitacao } from '../models/detalheSolicitacao';
import { SolicitacaoStatus  } from '../models/solicitacaoStatus';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-template-solicitacao',
  templateUrl: './template-solicitacao.component.html'

})

export class TemplateSolicitacaoComponent implements OnInit {

 
 @Input() exbibirAtendimento: boolean = true;
  
 @Input() detalheSolicitacao: DetalheSolicitacao; 

   public solicitacaoStatus: typeof SolicitacaoStatus;

 



 
  constructor( ) 
  {  
    this.solicitacaoStatus = SolicitacaoStatus;

  }

  

  ngOnInit(): void  {

  //  const routeParams = this.activeRouter.snapshot.paramMap;
  //  const solicitacaoId = Number(routeParams.get('Id'));

  //  this.obterDetalheSolicitacao(solicitacaoId);
  
  //  this.activeRouter.params.subscribe(routeParams => { 
	// 	// this.loadUserDetail(routeParams.id); 
  //   console.log(routeParams.Id);
  //   this.obterDetalheSolicitacao(routeParams.Id);

  //   console.log("Input Titulo:",this.titulo);
    
	// });
   
  }

  // obterDetalheSolicitacao(solicitacaoId: number){
  //   this.transporteServico.obterDetalheSolicitacao(solicitacaoId)
  //   .subscribe(
  //     detalheSolicitacao =>{
  //       this.detalheSolicitacao = detalheSolicitacao;
  //       console.log("Detalhe solicitação:" ,this.detalheSolicitacao);
  //     },
  //     error=>console.log(error)
      
  //   );
  // }

}
