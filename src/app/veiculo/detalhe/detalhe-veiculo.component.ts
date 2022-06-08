import { Component  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalheSolicitacao } from '../models/detalheSolicitacao';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-detalhe-veiculo',
  templateUrl: './detalhe-veiculo.component.html'

})


export class DetalheTransporteComponent  {

  public detalheSolicitacao: DetalheSolicitacao; 
  
  
  constructor(
              private transporteServico: VeiculoService,
              private activeRouter: ActivatedRoute,
              private router:Router) {  }

  

  ngOnInit(): void  {

     const routeParams = this.activeRouter.snapshot.paramMap;
     const solicitacaoId = Number(routeParams.get('Id'));
  
     this.obterDetalheSolicitacao(solicitacaoId);
    
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

  enviarParaDeliberacao(solicitacaoId:number){
    
    
    this.transporteServico.enviarSolicitacaoParaGestor(solicitacaoId ).subscribe({
      next: data => {
          console.log(data);
          this.router.navigate(['/solicitacoes'])
      },
      error: error => {
         console.error('There was an error!', error);
      }

    })
  
  }


}
