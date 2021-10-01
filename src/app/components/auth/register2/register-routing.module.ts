import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register2Component } from './register.component';

const routes: Routes = [{ path: '', component: Register2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Register2RoutingModule { }
