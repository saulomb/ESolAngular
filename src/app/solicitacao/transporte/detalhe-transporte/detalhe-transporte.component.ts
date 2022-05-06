import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalheSolicitacao } from '../detalheSolicitacao';
import { TransporteService } from '../transporte.service';

@Component({
  selector: 'app-detalhe-transporte',
  templateUrl: './detalhe-transporte.component.html'

})
export class DetalheTransporteComponent implements OnInit {

  constructor(
              private transporteServico: TransporteService,
              private route: ActivatedRoute) { }

  public detalheSolicitacao: DetalheSolicitacao;

  ngOnInit()  {

   const routeParams = this.route.snapshot.paramMap;
   const solicitacaoId = Number(routeParams.get('Id'));

    this.transporteServico.obterDetalheSolicitacao(solicitacaoId)
    .subscribe(
      detalheSolicitacao =>{
        this.detalheSolicitacao = detalheSolicitacao;
        console.log("Detalhe Solicitação:",this.detalheSolicitacao);
        console.log("Detalhe Solicitação API:",detalheSolicitacao);
      },
      error=>console.log(error)
      
    );


  }

}
