import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaAppComponent } from './conta.app.component';
import { LoginComponent } from './login/login.component';


const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
           { path: 'login', component: LoginComponent  }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule { }