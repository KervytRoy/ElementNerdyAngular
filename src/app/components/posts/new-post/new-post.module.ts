import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostsRoutingModule } from './new-post-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewPostsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

  ]
})
export class NewPostModule { }
