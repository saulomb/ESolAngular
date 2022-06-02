import { Injectable } from "@angular/core";
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { transporteSolicitado } from "./transporteSolicitado";
import { Lotacao } from "./lotacao";
import { DetalheSolicitacao } from "./detalheSolicitacao";
import { AtendimentoSolicitacao } from "./atendimentoSolicitacao";
import { Funcionario } from "./funcionario";
import { IncluirSolicitacao } from "./incluirSolicitacao";
import { BaseService } from "src/app/services/base.service";


@Injectable({
  providedIn: 'root',
})
export class TransporteService extends BaseService {

  //protected UrlServiceV1: string = "https://localhost:44352/";

  constructor(private http: HttpClient){ super();}
  
  
      obterSolicitacoes(): Observable<transporteSolicitado[]> {
          
          return this.http.get<transporteSolicitado[]>(this.UrlServiceV1 +"transporte/solicitacoes-por-lotacao/16", this.ObterHeaderJson());
           
      }

      obterLotacoes(): Observable<Lotacao[]> {
          
        return this.http.get<Lotacao[]>(this.UrlServiceV1 +"transporte/lotacoes");
      }

      obterDetalheSolicitacao(solicitacaoId: number): Observable<DetalheSolicitacao> {
            
        return this.http.get<DetalheSolicitacao>(this.UrlServiceV1 +"transporte/detalhe-solicitacao/"+solicitacaoId.toString(), this.ObterHeaderJson());
      }

      obterFuncionarioPorLotacao(lotacaoId: number): Observable<Funcionario[]> {
            
        return this.http.get<Funcionario[]>(this.UrlServiceV1 +"transporte/funcionario-por-lotacao/"+lotacaoId.toString(), this.ObterHeaderJson());
      }

      obterFuncionarioPorId(lotacaoId: number): Observable<Funcionario> {
            
        return this.http.get<Funcionario>(this.UrlServiceV1 +"transporte/funcionario/"+lotacaoId.toString(), this.ObterHeaderJson());
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

    incluirSolicitacao(solicitacao: IncluirSolicitacao)  {

      return this.http.post(this.UrlServiceV1 +"transporte/incluir-solicitacao/",solicitacao);
   
  }
}
