import { Usuario } from "../conta/models/usuario";

export class LocalStorageUtils {



    public obterUsuario() {
        return JSON.parse(localStorage.getItem('cerb.user'));
    }

    public salvarDadosLocaisUsuario(response: any, usuario: Usuario) {

      console.log('Token: ',response);
      console.log('Usuario: ', usuario.username)
      this.salvarTokenUsuario(response);
      this.salvarUsuario(usuario.username);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('cerb.token');
        localStorage.removeItem('cerb.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('cerb.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('cerb.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('cerb.user', JSON.stringify(user));
    }

}
