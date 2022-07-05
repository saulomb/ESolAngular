import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

import { Lotacao } from "../models/lotacao";
import { DetalheSolicitacao } from "../models/detalheSolicitacao";
import { AtendimentoSolicitacao } from "../models/atendimentoSolicitacao";
import { Funcionario } from "../models/funcionario";
import { IncluirSolicitacao } from "../models/incluirSolicitacao";
import { BaseService } from "src/app/services/base.service";
import { transporteSolicitado } from "../models/transporteSolicitado";
import { SolicitacaoStatus } from "../models/solicitacaoStatus";
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class VeiculoService extends BaseService {

  //protected UrlServiceV1: string = "https://localhost:44352/";

  constructor(private http: HttpClient){ super();}
  
  
      obterMinhasSolicitacoes(): Observable<transporteSolicitado[]> {

          let usuarioLogado = this.LocalStorage.obterUsuario();

          if (!usuarioLogado.lotacaoFisicaId) return;
          
          return  this.http.get<transporteSolicitado[]>
                  (this.UrlServiceV1 +"transporte/solicitacoes-por-lotacao/"+usuarioLogado.lotacaoFisicaId.toString(), this.ObterAuthHeaderJson())
                  .pipe(
                    map(super.extractData),
                    catchError(super.serviceError))
      }

      obterMinhasSolicitacoesPorStatus(status: SolicitacaoStatus): Observable<transporteSolicitado[]> {
        let usuarioLogado = this.LocalStorage.obterUsuario();

        if (!usuarioLogado.lotacaoFisicaId) return;
        
        return this.http.get<transporteSolicitado[]>
              (this.UrlServiceV1 +"transporte/solicitacoes-por-status/"+usuarioLogado.lotacaoFisicaId.toString()+"/"+status.toString(), this.ObterAuthHeaderJson())
              .pipe(
                map(super.extractData),
                catchError(super.serviceError))
         
    }

      obterLotacoes(): Observable<Lotacao[]> {
          
        return  this.http.get<Lotacao[]>
                (this.UrlServiceV1 +"transporte/lotacoes",  this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError))
      }

      obterLotacoesPorGerencia(): Observable<Lotacao[]> {
          
        return  this.http.get<Lotacao[]>(this.UrlServiceV1 +"transporte/lotacoes", this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError))
      }

      obterDetalheSolicitacao(solicitacaoId: number): Observable<DetalheSolicitacao> {
            
        return  this.http.get<DetalheSolicitacao>(this.UrlServiceV1 +"transporte/detalhe-solicitacao/"+solicitacaoId.toString(), this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError))
      }

      obterDetalheSolicitacaoAtendimento(solicitacaoId: number): Observable<DetalheSolicitacao> {
            
        return  this.http.get<DetalheSolicitacao>(this.UrlServiceV1 +"transporte/detalhe-solicitacao-atendimento/"+solicitacaoId.toString(), this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError))
      }

      obterFuncionarioPorLotacao(lotacaoId: number): Observable<Funcionario[]> {
            
        return  this.http.get<Funcionario[]>(this.UrlServiceV1 +"transporte/funcionario-por-lotacao/"+lotacaoId.toString(), this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError))
      }

      obterFuncionarioPorId(lotacaoId: number): Observable<Funcionario> {
            
        return  this.http.get<Funcionario>(this.UrlServiceV1 +"transporte/funcionario/"+lotacaoId.toString(), this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError))
      }

      deliberarSolicitacao(solicitacaoId: number, gestorId: number, aprovado:boolean)  {
          const queryParams = new HttpParams()
          .set('solicitacaoId', solicitacaoId.toString())
          .set('gestorId', gestorId.toString())
          .set('aprovada', aprovado.toString());

          console.log(queryParams);


           return  this.http.post(this.UrlServiceV1 +"transporte/deliberar-solicitacao",null, this.ObterAuthHeaderJson(queryParams))
                  .pipe(
                    map(super.extractData),
                    catchError(super.serviceError))

                    // return  this.http.post(this.UrlServiceV1 +"transporte/deliberar-solicitacao",null,  {params: queryParams } )
                    // .pipe(
                    //   map(super.extractData),
                    //   catchError(super.serviceError))
       
      }

      enviarSolicitacaoParaGestor(solicitacaoId: number)  {
        
        const queryParams = new HttpParams()
          .set('solicitacaoId', solicitacaoId.toString());

          let httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`,
        });  
        
        return  this.http.post(this.UrlServiceV1 +"transporte/enviar-solicitacao-gestor",null, this.ObterAuthHeaderJson(queryParams))
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError));
     
    }

      atendimentoSolicitacao(atendimento: AtendimentoSolicitacao)  {

        return  this.http.post(this.UrlServiceV1 +"transporte/atendimento-solicitacao/",atendimento, this.ObterAuthHeaderJson())
                .pipe(
                  map(super.extractData),
                  catchError(super.serviceError));
     
    }

    incluirSolicitacao(solicitacao: IncluirSolicitacao)  {

      return  this.http.post(this.UrlServiceV1 +"transporte/incluir-solicitacao/",solicitacao, this.ObterAuthHeaderJson())
              .pipe(
                map(super.extractData),
                catchError(super.serviceError));
   
  }
}
