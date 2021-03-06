import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AtendimentoSolicitacao } from '../models/atendimentoSolicitacao';
import { DetalheSolicitacao } from '../models/detalheSolicitacao';

import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-atendimento-solicitacao-veiculo',
  templateUrl: './atendimento-solicitacao-veiculo.component.html',
  styles: [
  ]
})
export class AtendimentoSolicitacaoTransporteComponent implements OnInit {

  //public titulo: string  = "Deliberar Atendimento de Veículo";
  public exbibirAtendimento:boolean = false; 

  atendimentoForm: FormGroup;
   
  public detalheSolicitacao: DetalheSolicitacao;
  public atendimentoSolicitacao: AtendimentoSolicitacao;

  constructor(private transporteServico: VeiculoService,
    private activeRoute: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private toastr: ToastrService) { }


    

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
    
 
     this.transporteServico.obterDetalheSolicitacaoAtendimento(solicitacaoId)
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
      gestorParecer: [this.detalheSolicitacao?.atendimentoParecer],
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
            //console.log(data);
            //this.router.navigate(['/minhas-solicitacoes'])
            let toast = this.toastr.success('Deliberação do atendimento concluída com sucesso!');
          
            if (toast){
              toast.onHidden.subscribe(()=>{
                this.router.navigate(['/minhas-solicitacoes']);
              })
            }
        },
        error: error => {
           console.error('Erro ao efetuar deliberação', error);
           this.toastr.error('Ocorreu um erro ao efetuar a deliberação, por favor tente mais tarde!');
        }
  
      })
    
    }
}
