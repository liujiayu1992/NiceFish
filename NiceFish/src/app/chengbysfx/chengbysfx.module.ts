import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChengbysfxComponent } from './chengbysfx.component';
import {ChartComponent} from "../chart/chart.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChengbysfxComponent,ChartComponent]
})
export class ChengbysfxModule { }
