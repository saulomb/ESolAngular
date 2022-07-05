import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { rootRouterConfig } from './app.routes.module';
import { ListaTransporteComponent } from './veiculo/listar/listar-veiculo.component';
import { VeiculoService } from './veiculo/services/veiculo.service';
import { DetalheTransporteComponent } from './veiculo/detalhe/detalhe-veiculo.component';
import { GestorSolicitacaoTransporteComponent } from './veiculo/gestor-deliberacao/gestor-deliberacao-veiculo.component';
import { AtendimentoSolicitacaoTransporteComponent } from './veiculo/atendimento-deliberacao/atendimento-solicitacao-veiculo.component'; 


import { IncluirSolicitacaoComponent } from './veiculo/incluir/incluir-veiculo.component';



import { TemplateSolicitacaoComponent } from './veiculo/template-solicitacao/template-solicitacao.component';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './conta/login/login.component';
import { ContaService } from './conta/services/conta.service';
import { MenuLoginComponent } from './navegacao/menu-login/menu-login.component';
import { TemplateListaSolicitacaoComponent } from './veiculo/template-lista-solicitacao/templante-lista-solicitacao.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ListaTransporteComponent,
    DetalheTransporteComponent,
    GestorSolicitacaoTransporteComponent,
    AtendimentoSolicitacaoTransporteComponent,
    IncluirSolicitacaoComponent,
    TemplateSolicitacaoComponent,
    TemplateListaSolicitacaoComponent,
    MenuLoginComponent,
    LoginComponent,
    NotFoundComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})],
    
  ],

  exports:[
    NotFoundComponent
  ],
  providers: [
    VeiculoService,
    ContaService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }  ,
    {provide: APP_BASE_HREF, useValue: '/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
