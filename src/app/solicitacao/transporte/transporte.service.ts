import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
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
          
          return this.http.get<transporteSolicitado[]>(this.UrlServiceV1 +"transporte/solicitacoes/16");
           
      }

      obterLotacoes(): Observable<Lotacao[]> {
          
        return this.http.get<Lotacao[]>(this.UrlServiceV1 +"transporte/lotacoes");
      }

      obterDetalheSolicitacao(solicitacaoId: number): Observable<DetalheSolicitacao> {
            
        return this.http.get<DetalheSolicitacao>(this.UrlServiceV1 +"transporte/detalhe-solicitacao/"+solicitacaoId.toString());
      }
}
