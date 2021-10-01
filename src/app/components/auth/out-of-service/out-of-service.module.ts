import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutOfServiceRoutingModule } from './out-of-service.routing.module';
import { OutOfServiceComponent } from './out-of-service.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OutOfServiceComponent],
  imports: [
    CommonModule,
    OutOfServiceRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OutOfServiceModule { }
