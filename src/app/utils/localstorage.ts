import { Usuario } from "../conta/models/usuario";

export class LocalStorageUtils {



    public obterUsuario() {
        return JSON.parse(localStorage.getItem('cerb.login'));
    }

    public salvarDadosLocaisUsuario(response: any, usuario: Usuario) {

      console.log('Token: ',response);
      console.log('Usuario: ', usuario.login)
      this.salvarTokenUsuario(response);
      this.salvarUsuario(usuario);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('cerb.token');
        localStorage.removeItem('cerb.login');
        localStorage.removeItem('cerb.lotacaoFisicaId');
        localStorage.removeItem('cerb.lotacaoFisicaSigla');
        localStorage.removeItem('cerb.perfilGestor');
        localStorage.removeItem('cerb.perfilAtendimento');
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
    }

}
