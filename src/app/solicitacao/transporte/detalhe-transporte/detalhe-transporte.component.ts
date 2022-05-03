import { Component, OnInit } from '@angular/core';
import { DetalheSolicitacao } from '../detalheSolicitacao';
import { TransporteService } from '../transporte.service';

@Component({
  selector: 'app-detalhe-transporte',
  templateUrl: './detalhe-transporte.component.html'

})
export class DetalheTransporteComponent implements OnInit {

  constructor(private transporteServico: TransporteService) { }

  public detalheSolicitacao: DetalheSolicitacao;

  ngOnInit()  {

    this.transporteServico.obterDetalheSolicitacao()
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
