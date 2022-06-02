import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


//import { LoginComponent } from './login/login.component';

import { ContaRoutingModule } from './conta.route';
import { ContaAppComponent } from './conta.app.component';
import { ContaService } from './services/conta.service';
import { ContaGuard } from './models/conta.guard';




@NgModule({
  declarations: [
    ContaAppComponent,
   // LoginComponent,
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers:[
    ContaService,
    ContaGuard
  ]
})
export class ContaModule { }
