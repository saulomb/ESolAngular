import { HttpHeaders, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from 'src/environments/environment';
import { LocalStorageUtils } from '../utils/localstorage';

export abstract class BaseService {

    protected UrlServiceV1: string = environment.apiUrlv1;
    public LocalStorage = new LocalStorageUtils();

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }

    protected ObterAuthHeaderJson(httpParams: HttpParams = null) {
        
       let httpHeaders =  new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`
        });

        if (httpParams != null)
             return { headers: httpHeaders, params: httpParams };
        else 
            return { headers: httpHeaders};



        // return {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`
        //     }), params: httpParams
        // };


    }

    protected extractData(response: any) {
        return response.data || {};
       //return response || {};
    }

    protected extractDataUsuario(response: any) {
        return response.data.result || {};
       //return response || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];
        let customResponse = { error: { errors: [] }}

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }
        if (response.status === 500) {
            customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.");

            // Erros do tipo 500 não possuem uma lista de erros
            // A lista de erros do HttpErrorResponse é readonly
            customResponse.error.errors = customError;
            return throwError(customResponse);
        }


        console.error(response);
        return throwError(response);
    }
}
