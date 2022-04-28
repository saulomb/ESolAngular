import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { transporteSolicitado } from "./transporteSolicitado";

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  protected UrlServiceV1: string = "https://localhost:44352/";

  constructor(private http: HttpClient){}
  
  
      obterSolicitacoes(): Observable<transporteSolicitado[]> {
          
          return this.http.get<transporteSolicitado[]>(this.UrlServiceV1 +"transporte/solicitacoes/16");
           
      }
}
