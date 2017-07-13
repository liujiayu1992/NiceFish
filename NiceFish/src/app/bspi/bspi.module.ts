import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BspiComponent } from './bspi.component';
import { ChartsComponent } from "../charts/charts.component";

@NgModule({
  imports: [
    CommonModule,
    ChartsComponent
  ],
  declarations: [BspiComponent,ChartsComponent]
})
export class BspiModule { }
