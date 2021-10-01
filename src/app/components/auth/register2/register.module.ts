import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Register2RoutingModule } from './register-routing.module';
import { Register2Component } from './register.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Register2Component],
  imports: [
    CommonModule,
    Register2RoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class Register2Module { }
