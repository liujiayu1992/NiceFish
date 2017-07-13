import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CctdComponent } from './cctd.component';
import { ChartsComponent } from "../charts/charts.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CctdComponent,ChartsComponent]
})

export class CctdModule { }
