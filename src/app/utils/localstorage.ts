import { Usuario } from "../conta/models/usuario";
import { Lotacao } from "../veiculo/models/lotacao";

export class LocalStorageUtils {



    public obterLogin() : string {
        return JSON.parse(localStorage.getItem('cerb.login'));
    }

    public  obterUsuario() : Usuario {
        return JSON.parse(localStorage.getItem('cerb.usuario'));
    }

    public obterLotacaoAtendimento() : Lotacao {
        return JSON.parse(localStorage.getItem('cerb.atendimento'));
    }

    public estaLogado(): boolean{
        return (this.obterLogin() != null)
    }

    public salvarDadosLocaisUsuario(response:  Usuario) {

      //console.log('Token: ',response);
      console.log('Usuario: ', response.login)
      //this.salvarTokenUsuario(response);
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
        localStorage.removeItem('cerb.login');
        localStorage.removeItem('cerb.lotacaoFisicaId');
        localStorage.removeItem('cerb.lotacaoFisicaSigla');
        localStorage.removeItem('cerb.perfilGestor');
        localStorage.removeItem('cerb.perfilAtendimento');
        localStorage.removeItem('cerb.usuario');
        localStorage.removeItem('cerb.atendimento');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('cerb.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('cerb.token', token);
    }

    public salvarUsuario(usuario: Usuario) {
        localStorage.setItem('cerb.login', JSON.stringify(usuario.login));
        localStorage.setItem('cerb.nome', JSON.stringify(usuario.nome));
        localStorage.setItem('cerb.lotacaoFisicaId', JSON.stringify(usuario.lotacaoFisicaId));
        localStorage.setItem('cerb.lotacaoFisicaSigla', JSON.stringify(usuario.lotacaoFisicaSigla));
        localStorage.setItem('cerb.perfilGestor', JSON.stringify(usuario.perfilGestor));
        localStorage.setItem('cerb.perfilAtendimento', JSON.stringify(usuario.perfilAtendimento));
        localStorage.setItem('cerb.usuario', JSON.stringify(usuario));

    }

    public salvarLotacaoAtendimento(atendimento: Lotacao) {
        localStorage.setItem('cerb.atendimento', JSON.stringify(atendimento));

    }

}
