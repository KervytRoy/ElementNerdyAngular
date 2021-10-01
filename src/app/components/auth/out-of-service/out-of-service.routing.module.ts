import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutOfServiceComponent } from './out-of-service.component';

const routes: Routes = [{ path: '', component: OutOfServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutOfServiceRoutingModule { }
