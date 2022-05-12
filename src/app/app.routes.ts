import { Routes } from "@angular/router" 
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { AtendimentoSolicitacaoTransporteComponent } from "./solicitacao/transporte/atendimento-solicitacao-transporte/atendimento-solicitacao-transporte.component";
import { DetalheTransporteComponent } from "./solicitacao/transporte/detalhe-transporte/detalhe-transporte.component";
import { GestorSolicitacaoTransporteComponent } from "./solicitacao/transporte/gestor-solicitacao-transporte/gestor-solicitacao-transporte.component";
import { ListaTransporteComponent } from "./solicitacao/transporte/lista-transporte/lista-transporte.component";


export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'solicitacoes', component: ListaTransporteComponent },
    {path: 'detalhe-solicitacao/:Id', component: DetalheTransporteComponent },
    {path: 'gestor-solicitacao-transporte/:Id', component: GestorSolicitacaoTransporteComponent },
    {path: 'gestor-atendimento-transporte/:Id', component: AtendimentoSolicitacaoTransporteComponent },
];


// { path: 'products/:productId', component: ProductDetailsComponent },