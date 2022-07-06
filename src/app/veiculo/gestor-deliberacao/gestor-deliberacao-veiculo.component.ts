import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router:Router,
    private toastr: ToastrService) { }


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
          //console.log(data);
          //this.router.navigate(['/minhas-solicitacoes'])

          
          
          let toast = this.toastr.success('Deliberação concluída com sucesso!');
          
          if (toast){
            toast.onHidden.subscribe(()=>{
              this.router.navigate(['/minhas-solicitacoes']);
            })
          }
      },
      error: error => {
         console.error('There was an error!', error);
         this.toastr.error('Ocorreu um erro ao efetuar a deliberação, por favor tente mais tarde!');

      }

    })
  
  }

}
