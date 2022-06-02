import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoSolicitacao } from '../atendimentoSolicitacao';
import { DetalheSolicitacao } from '../detalheSolicitacao';
import { TransporteService } from '../transporte.service';

@Component({
  selector: 'app-atendimento-solicitacao-transporte',
  templateUrl: './atendimento-solicitacao-transporte.component.html',
  styles: [
  ]
})
export class AtendimentoSolicitacaoTransporteComponent implements OnInit {

  constructor(private transporteServico: TransporteService,
    private activeRoute: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder) { }

    atendimentoForm: FormGroup;
    public detalheSolicitacao: DetalheSolicitacao;
    public atendimentoSolicitacao: AtendimentoSolicitacao;
    

    // atendimentoForm = this.fb.group({
    //   solicitacaoid: '',
    //   gestorDeliberouId: '',
    //   gestorParecer: '',
    //   gestorDataDeliberacao: '',
    //   comMotorista: '',
    //   deferido: '',
    //   indeferido: ''
    // });


  ngOnInit()  {

    const routeParams = this.activeRoute.snapshot.paramMap;
    const solicitacaoId = Number(routeParams.get('Id'));
    const userId = 646;
    
 
     this.transporteServico.obterDetalheSolicitacao(solicitacaoId)
     .subscribe(
       detalheSolicitacao =>{
         this.detalheSolicitacao = detalheSolicitacao;
         console.log("Atendimento Solicitação:",this.detalheSolicitacao);
         console.log("Atendimento Solicitação API:",detalheSolicitacao);
         
       },
       error=>console.log(error)
       
     );
    
    
     this.atendimentoForm = this.fb.group({
      solicitacaoId:[solicitacaoId],
      gestorDeliberouId:[userId],
      gestorParecer: [''],
      dataSaidaLiberada: [],
      horaSaidaLiberada: [],
      comMotorista: [false],
      atendimentoStatus: [1],
    });
    
    }


    
    // deliberarSolicitacao(atendimento: atendimentoSolicitacao){
    //   if (this.atendimentoForm.dirty && this.atendimentoForm.valid){
    //     //this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    //     this.formResult = JSON.stringify(this.atendimentoForm.value);
    //   }
      
  
    // }

    setarAtendimento(){
   
     
      this.atendimentoSolicitacao = Object.assign({}, this.atendimentoSolicitacao, this.atendimentoForm.value);

      this.atendimentoSolicitacao.atendimentoStatus = Number(this.atendimentoSolicitacao.atendimentoStatus);
      
      console.log(this.atendimentoSolicitacao)

      this.transporteServico.atendimentoSolicitacao(this.atendimentoSolicitacao).subscribe({
        next: data => {
            console.log(data);
            this.router.navigate(['/solicitacoes'])
        },
        error: error => {
           console.error('There was an error!', error);
        }
  
      })
    
    }
}
