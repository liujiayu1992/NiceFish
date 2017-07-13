import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YanhmtyjComponent } from './yanhmtyj.component';
import { ChartsComponent } from "../charts/charts.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YanhmtyjComponent,ChartsComponent]
})
export class YanhmtyjModule { }
