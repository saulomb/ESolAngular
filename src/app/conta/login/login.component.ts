import { Component,  OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




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
              private router: Router,
              private toastr: ToastrService)   {

   }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      senha:['', Validators.required]

    });
  }



  efetuarLogin(){
    if (this.loginForm.dirty && this.loginForm.valid){
      this.login = Object.assign({}, this.login, this.loginForm.value);

      //console.log(this.usuario);

      this.contaService.login(this.login)
      .subscribe(
          sucesso => {
            this.processarSucesso(sucesso)
          },
          falha => {this.processarFalha(falha)}
      );


    }
  }

  processarSucesso(response: any){
    this.usuario = response.result.userToken;
    this.loginForm.reset();
    this.errors = [];
    

    //console.log('response: ', response);
    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response.result.userToken);
    this.contaService.LocalStorage.salvarDadosLocaisAtendimento(this.usuario.lotacaoAtendimento);
    this.contaService.LocalStorage.salvarTokenUsuario(response.result.accessToken);


    let toast = this.toastr.success('Login realizado com sucesso','Bem vindo!!!');
    if (toast){
      toast.onHidden.subscribe(()=>{
        this.router.navigate(['/minhas-solicitacoes']);
      })
    }

    // this.toastr.success('Login realizado com sucesso!', 'Bem Vindo!');
    //this.router.navigate(['/home']);

  }

  processarFalha(fail: any){
    console.log("Menssagem de erro: ",fail.error.errors);
    //this.errors = fail.error.errors.Mensagens.split('\r\n');
    this.errors = fail.error.errors.Mensagens.toString();


    
    //this.toastr.error('Ocorreu um erro!','Opa :(');

    this.toastr.error(this.errors.toString());

    
  }

}



