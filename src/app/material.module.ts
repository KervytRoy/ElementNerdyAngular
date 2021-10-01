import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

const myModule = [ MatInputModule, MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatListModule, MatDialogModule ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, myModule
  ],
  exports: [myModule]
})
export class MaterialModule { }
