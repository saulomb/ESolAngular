import { Injectable } from "@angular/core";
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { transporteSolicitado } from "./transporteSolicitado";
import { Lotacao } from "./lotacao";
import { DetalheSolicitacao } from "./detalheSolicitacao";

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  protected UrlServiceV1: string = "https://localhost:44352/";

  constructor(private http: HttpClient){}
  
  
      obterSolicitacoes(): Observable<transporteSolicitado[]> {
          
          return this.http.get<transporteSolicitado[]>(this.UrlServiceV1 +"transporte/solicitacoes-por-lotacao/16");
           
      }

      obterLotacoes(): Observable<Lotacao[]> {
          
        return this.http.get<Lotacao[]>(this.UrlServiceV1 +"transporte/lotacoes");
      }

      obterDetalheSolicitacao(solicitacaoId: number): Observable<DetalheSolicitacao> {
            
        return this.http.get<DetalheSolicitacao>(this.UrlServiceV1 +"transporte/detalhe-solicitacao/"+solicitacaoId.toString());
      }

      deliberarSolicitacao(solicitacaoId: number, gestorId: number, aprovado:boolean)  {
        // let queryParams = new HttpParams();
        //   queryParams.append("solicitacaoId",solicitacaoId.toString()); 
        //   queryParams.append("gestorId",gestorId.toString()); 
        //   queryParams.append("aprovado",aprovado.toString()); 
          const queryParams = new HttpParams()
          .set('solicitacaoId', solicitacaoId.toString())
          .set('gestorId', gestorId.toString())
          .set('aprovada', aprovado.toString());


          console.log(queryParams);

      //     const body = {
      //       solicitacaoid: 1,
      //       gestorid: 646,
      //       aprovado: true
      //   };
    
      //   const headers = 'headers made with HttpHeaders';
    
      //   const options = {
      //     headers: headers,
      //     observe: "response" as 'body', // to display the full response & as 'body' for type cast
      //     responseType: "json"
      // };


     

      return this.http.post(this.UrlServiceV1 +"transporte/deliberar-solicitacao",null,  { params: queryParams });

          // return this.http.post(this.UrlServiceV1 +"transporte/deliberar-solicitacao", {solicitacaoId: solicitacaoId,          
          //        gestorId: gestorId, aprovado: aprovado});
         

       // return this.http.post<DetalheSolicitacao>(this.UrlServiceV1 +"transporte/deliberar-solicitacao?solicitacaoId=1&gestorId=646&aprovada=true",queryParams);
      }
}
