import { Component, OnInit } from '@angular/core';
import { TransporteService } from '../transporte.service';
import { transporteSolicitado } from '../transporteSolicitado';

@Component({
  selector: 'app-lista-transporte',
  templateUrl: './lista-transporte.component.html',
  styles: [
  ]
})
export class ListaTransporteComponent implements OnInit {

  constructor(private transporteServico: TransporteService) 
  {   }

  public solicitacoes: transporteSolicitado[];



  ngOnInit() {
    this.transporteServico.obterSolicitacoes()
      .subscribe(
        solicitacoes =>{
          this.solicitacoes = solicitacoes;
          console.log("Carregando solicitações:",solicitacoes["values"]);
        },
        error=>console.log(error)
        
      );
      
  }

}


// @Component({
//   selector: 'app-lista-produto',
//   templateUrl: './lista-produto.component.html'
// })
// export class ListaProdutoComponent implements OnInit {

//   constructor(private produtoServico: ProdutoService){}

//   public produtos: Produto[];

//   ngOnInit()  {
//     this.produtoServico.obterProdutos()
//       .subscribe(
//         produtos => {
//           this.produtos = produtos;
//           console.log(produtos);
//         },
//         error => console.log(error)
//       );

      
//   }


//  }
