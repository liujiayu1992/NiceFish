import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShouhczsComponent } from './shouhczs.component';
import { ChartsComponent } from "../charts/charts.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShouhczsComponent,ChartsComponent]
})
export class ShouhczsModule { }
