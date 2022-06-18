import { Lotacao } from "src/app/veiculo/models/lotacao";

export interface Usuario {

    id: number,
    login: string,
    nome: string,
    lotacaoFisicaId: number,
    lotacaoFisicaSigla: string,
    gestorResponsavelId:number,
    lotacaoSuperiorId:number,
    perfilGestor: boolean,
    perfilAtendimento: boolean,
    lotacaoAtendimento: Lotacao,
    podeAprovarAtendimento: boolean,
    accessToken: string,
    claims: Claims[]
  }

  export interface Claims {
    value:string,
    type:string
  }


//   export interface Usuario {
//     id: string;
//     username: string;
//     password: string;
//     confirmPassword: string;
//     access_token: string;
// }
