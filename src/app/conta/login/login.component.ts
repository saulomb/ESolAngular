import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { ToastrService } from 'ngx-toastr';


import { fromEvent, merge, Observable } from 'rxjs';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};


  errors: any[] = [];
  loginForm: FormGroup;
  usuario: Usuario;




  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService)   {

      this.validationMessages = {
      username: {
        required: 'Informe o usuário'

      },
      password: {
        required: 'Informe a senha'

      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

   }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password:['', [Validators.required]]

    });
  }

  ngAfterViewInit(): void {


    let controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
        this.displayMessage = this.genericValidator.processarMensagens(this.loginForm);
    });
  }

  login(){
    if (this.loginForm.dirty && this.loginForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      //console.log(this.usuario);

      this.contaService.login(this.usuario)
      .subscribe(
          sucesso => {this.processarSucesso(sucesso, this.usuario)},
          falha => {this.processarFalha(falha)}
      );


    }
  }

  processarSucesso(response: any, usuario: Usuario){
    this.loginForm.reset();
    this.errors = [];

    //console.log('response: ', response);
    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response, this.usuario);

    let toast = this.toastr.success('Registro realizado com sucesso','Bem vindo!!!');
    if (toast){
      toast.onHidden.subscribe(()=>{
        this.router.navigate(['/home']);
      })
    }

    this.toastr.success('Login realizado com sucesso!', 'Bem Vindo!');
    this.router.navigate(['/home']);

  }

  processarFalha(fail: any){
    //console.log(fail.error.Message);
    this.errors = fail.error.Message.split('\r\n');
    this.toastr.error('Ocorreu um erro!','Opa :(');
  }

}



