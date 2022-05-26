import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { rootRouterConfig } from './app.routes.module';
import { ListaTransporteComponent } from './solicitacao/transporte/lista-transporte/lista-transporte.component';
import { TransporteService } from './solicitacao/transporte/transporte.service';
import { DetalheTransporteComponent } from './solicitacao/transporte/detalhe-transporte/detalhe-transporte.component';
import { GestorSolicitacaoTransporteComponent } from './solicitacao/transporte/gestor-solicitacao-transporte/gestor-solicitacao-transporte.component';
import { AtendimentoSolicitacaoTransporteComponent } from './solicitacao/transporte/atendimento-solicitacao-transporte/atendimento-solicitacao-transporte.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { IncluirSolicitacaoComponent } from './solicitacao/transporte/incluir-solicitacao/incluir-solicitacao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    IncluirSolicitacaoComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    TransporteService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }  ,
    {provide: APP_BASE_HREF, useValue: '/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
