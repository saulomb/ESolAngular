export interface Usuario {

    id: number,
    login: string,
    nome: string,
    lotacaoFisicaId: number,
    lotacaoFisicaSigla: string,
    gestorResponsavelId:number,
    lotacaoSuperiorId:number,
    perfilGestor: boolean,
    perfilAtendimento: boolean
  }


//   export interface Usuario {
//     id: string;
//     username: string;
//     password: string;
//     confirmPassword: string;
//     access_token: string;
// }
