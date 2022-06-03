import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router" 
import { LoginComponent } from "./conta/login/login.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { AtendimentoSolicitacaoTransporteComponent } from "./veiculo/atendimento-deliberacao/atendimento-solicitacao-veiculo.component";
import { DetalheTransporteComponent } from "./veiculo/detalhe/detalhe-veiculo.component";
import { GestorSolicitacaoTransporteComponent } from "./veiculo/gestor-deliberacao/gestor-deliberacao-veiculo.component";
import { IncluirSolicitacaoComponent } from "./veiculo/incluir/incluir-veiculo.component";
import { ListaTransporteComponent } from "./veiculo/listar/listar-veiculo.component";


export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    //{path: 'login', component: LoginComponent},
    {path: 'solicitacoes', component: ListaTransporteComponent },
    {path: 'incluir-solicitacao', component: IncluirSolicitacaoComponent },
    {path: 'detalhe-solicitacao/:Id', component: DetalheTransporteComponent },
    {path: 'gestor-solicitacao-transporte/:Id', component: GestorSolicitacaoTransporteComponent },
    {path: 'gestor-atendimento-transporte/:Id', component: AtendimentoSolicitacaoTransporteComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(rootRouterConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


// { path: 'products/:productId', component: ProductDetailsComponent },