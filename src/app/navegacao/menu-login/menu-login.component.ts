import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html'
})
export class MenuLoginComponent {

  token: string = "";
  user: any;
  //login: string = "";
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) {  }

  usuarioLogado(): boolean {
   // this.token = this.localStorageUtils.obterTokenUsuario();
    this.user = this.localStorageUtils.obterLogin();

    // if (this.user)
    //   this.login = this.user;

    return this.user !== null;
  }

  logout() {
    this.localStorageUtils.limparDadosLocaisUsuario();
    this.router.navigate(['/conta/login']);
  }
}
