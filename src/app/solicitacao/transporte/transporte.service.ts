import { Injectable } from "@angular/core";
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { transporteSolicitado } from "./transporteSolicitado";
import { Lotacao } from "./lotacao";
import { DetalheSolicitacao } from "./detalheSolicitacao";
import { AtendimentoSolicitacao } from "./atendimentoSolicitacao";
import { Funcionario } from "./funcionario";


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

      obterFuncionarioPorLotacao(lotacaoId: number): Observable<Funcionario[]> {
            
        return this.http.get<Funcionario[]>(this.UrlServiceV1 +"transporte/funcionario-por-lotacao/"+lotacaoId.toString());
      }

      obterFuncionarioPorId(lotacaoId: number): Observable<Funcionario> {
            
        return this.http.get<Funcionario>(this.UrlServiceV1 +"transporte/funcionario/"+lotacaoId.toString());
      }

      deliberarSolicitacao(solicitacaoId: number, gestorId: number, aprovado:boolean)  {
          const queryParams = new HttpParams()
          .set('solicitacaoId', solicitacaoId.toString())
          .set('gestorId', gestorId.toString())
          .set('aprovada', aprovado.toString());

          console.log(queryParams);

          return this.http.post(this.UrlServiceV1 +"transporte/deliberar-solicitacao",null,  { params: queryParams });
       
      }

      atendimentoSolicitacao(atendimento: AtendimentoSolicitacao)  {

        return this.http.post(this.UrlServiceV1 +"transporte/atendimento-solicitacao/",atendimento);
     
    }
}
