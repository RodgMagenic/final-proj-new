import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatDialogModule } from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatDialogModule],
  exports: [MatButtonModule, MatToolbarModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatDialogModule],
})
export class MaterialModule { }
