import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';
import { Login } from '../models/login';

@Injectable()
export class ContaService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    // registrarUsuario(usuario: Usuario): Observable<Usuario> {
    //     let response = this.http
    //         .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
    //         .pipe(
    //             map(this.extractData),
    //             catchError(this.serviceError));

    //     return response;
    // }

    login(login: Login): Observable<Usuario> {
       //console.log(usuario);
       let response = this.http
            .post(this.UrlServiceV1+"conta/autenticar/", login, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }
}
