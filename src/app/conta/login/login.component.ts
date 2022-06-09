import { Component,  OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




import { fromEvent, merge, Observable } from 'rxjs';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  //@ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  // validationMessages: ValidationMessages;
  // genericValidator: GenericValidator;
  // displayMessage: DisplayMessage = {};


  errors: any[] = [];
  loginForm: FormGroup;
  usuario: Usuario;
  login: Login;




  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router
    )   {

   }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: [],
      senha:[]

    });
  }



  efetuarLogin(){
   // if (this.loginForm.dirty && this.loginForm.valid){
      this.login = Object.assign({}, this.login, this.loginForm.value);

      //console.log(this.usuario);

      this.contaService.login(this.login)
      .subscribe(
          sucesso => {
            this.usuario = sucesso;
            this.processarSucesso(sucesso, this.usuario)
          },
          falha => {this.processarFalha(falha)}
      );


   // }
  }

  processarSucesso(response: any, usuario: Usuario){
    //this.loginForm.reset();
    this.errors = [];

    //console.log('response: ', response);
    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response, this.usuario);

    // let toast = this.toastr.success('Registro realizado com sucesso','Bem vindo!!!');
    // if (toast){
    //   toast.onHidden.subscribe(()=>{
    //     this.router.navigate(['/home']);
    //   })
    // }

    // this.toastr.success('Login realizado com sucesso!', 'Bem Vindo!');
    this.router.navigate(['/home']);

  }

  processarFalha(fail: any){
    //console.log(fail.error.Message);
    this.errors = fail.error.Message.split('\r\n');
    //this.toastr.error('Ocorreu um erro!','Opa :(');
  }

}



