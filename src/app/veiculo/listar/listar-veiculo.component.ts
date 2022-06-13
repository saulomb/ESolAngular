import { Component, OnInit } from '@angular/core';
//import { Lotacao } from '../models/lotacao';
import { VeiculoService } from '../services/veiculo.service';
import { transporteSolicitado } from '../models/transporteSolicitado';

@Component({
  selector: 'app-listar-veiculo',
  templateUrl: './listar-veiculo.component.html',
  styles: [
  ]
})
export class ListaTransporteComponent implements OnInit {

  constructor(private transporteServico: VeiculoService) 
  {   }

  public solicitacoes: transporteSolicitado[];
  //public lotacoes: Lotacao[];



  ngOnInit() {
    this.transporteServico.obterMinhasSolicitacoes()
      .subscribe(
        solicitacoes =>{
          this.solicitacoes = solicitacoes;
          console.log("Carregando solicitações:",solicitacoes);
        },
        error=>console.log(error)
        
      );

      // this.transporteServico.obterLotacoes()
      // .subscribe(
      //   lotacoes =>{
      //     this.lotacoes = lotacoes;
      //     console.log("Carregando lotações:",lotacoes);
      //   },
      //   error=>console.log(error)
        
      // );
      
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
