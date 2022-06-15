import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { DetalheSolicitacao } from '../models/detalheSolicitacao';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-gestor-deliberacao-veiculo',
  templateUrl: './gestor-deliberacao-veiculo.component.html',
  styles: [
  ]
})
export class GestorSolicitacaoTransporteComponent implements OnInit {

  public titulo: string;
  
  constructor(private transporteServico: VeiculoService,
    private activeRoute: ActivatedRoute,   
    private router:Router) { }


    public detalheSolicitacao: DetalheSolicitacao;

  ngOnInit()  {


    
     const routeParams = this.activeRoute.snapshot.paramMap;
     const solicitacaoId = Number(routeParams.get('Id'));
 
     this.transporteServico.obterDetalheSolicitacao(solicitacaoId)
     .subscribe(
       detalheSolicitacao =>{
         this.detalheSolicitacao = detalheSolicitacao;
         console.log("Gestão Solicitação:",this.detalheSolicitacao);
         console.log("Gestão Solicitação API:",detalheSolicitacao);
         
       },
       error=>console.log(error)
       
     );
  }


  setarDeliberacaoGestor(solicitacaoId:number, gestorId: number, aprovado:boolean){
    
    
    this.transporteServico.deliberarSolicitacao(solicitacaoId, gestorId, aprovado).subscribe({
      next: data => {
          console.log(data);
          this.router.navigate(['/minhas-solicitacoes'])
      },
      error: error => {
         console.error('There was an error!', error);
      }

    })
  
  }

}
