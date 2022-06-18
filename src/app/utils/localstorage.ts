import { Usuario } from "../conta/models/usuario";
import { Lotacao } from "../veiculo/models/lotacao";

export class LocalStorageUtils {



    public obterLogin() : string {
        return JSON.parse(localStorage.getItem('eSol.login'));
    }

    public  obterUsuario() : Usuario {
        return JSON.parse(localStorage.getItem('eSol.usuario'));
    }

    public obterLotacaoAtendimento() : Lotacao {
        return JSON.parse(localStorage.getItem('eSol.atendimento'));
    }

    public estaLogado(): boolean{
        return (this.obterLogin() != null)
    }

    public salvarDadosLocaisUsuario(response:  any) {

      //console.log('Token: ',response);
      console.log('Usuario: ', response.login)
      this.salvarTokenUsuario(response);
      this.salvarUsuario(response);
    }

    public salvarDadosLocaisAtendimento(response:  Lotacao) {

        //console.log('Token: ',response);
        console.log('Atendimento: ', response)
        //this.salvarTokenUsuario(response);
        this.salvarLotacaoAtendimento(response);
      }

    public limparDadosLocaisUsuario() {
        //localStorage.removeItem('cerb.token');
        localStorage.removeItem('eSol.login');
        localStorage.removeItem('eSol.lotacaoFisicaId');
        localStorage.removeItem('eSol.lotacaoFisicaSigla');
        localStorage.removeItem('eSol.perfilGestor');
        localStorage.removeItem('eSol.perfilAtendimento');
        localStorage.removeItem('eSol.usuario');
        localStorage.removeItem('eSol.atendimento');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('eSol.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('eSol.token', token);
    }

    public salvarUsuario(usuario: Usuario) {
        localStorage.setItem('eSol.login', JSON.stringify(usuario.login));
        localStorage.setItem('eSol.nome', JSON.stringify(usuario.nome));
        localStorage.setItem('eSol.lotacaoFisicaId', JSON.stringify(usuario.lotacaoFisicaId));
        localStorage.setItem('eSol.lotacaoFisicaSigla', JSON.stringify(usuario.lotacaoFisicaSigla));
        localStorage.setItem('eSol.perfilGestor', JSON.stringify(usuario.perfilGestor));
        localStorage.setItem('eSol.perfilAtendimento', JSON.stringify(usuario.perfilAtendimento));
        localStorage.setItem('eSol.usuario', JSON.stringify(usuario));

    }

    public salvarLotacaoAtendimento(atendimento: Lotacao) {
        localStorage.setItem('eSol.atendimento', JSON.stringify(atendimento));

    }

}
