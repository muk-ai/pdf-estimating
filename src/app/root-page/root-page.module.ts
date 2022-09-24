import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootPageRoutingModule } from './root-page-routing.module';
import { RootPageComponent } from './root-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PdfChartComponent } from './pdf-chart/pdf-chart.component';

@NgModule({
  declarations: [
    RootPageComponent,
    PdfChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    RootPageRoutingModule
  ]
})
export class RootPageModule { }
