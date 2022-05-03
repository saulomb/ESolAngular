import { Routes } from "@angular/router" 
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { DetalheTransporteComponent } from "./solicitacao/transporte/detalhe-transporte/detalhe-transporte.component";
import { ListaTransporteComponent } from "./solicitacao/transporte/lista-transporte/lista-transporte.component";


export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'solicitacoes', component: ListaTransporteComponent },
    {path: 'detalhe-solicitacao', component: DetalheTransporteComponent },
];