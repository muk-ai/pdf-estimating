import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RootPageRoutingModule } from './root-page-routing.module';
import { RootPageComponent } from './root-page/root-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PdfChartComponent } from './pdf-chart/pdf-chart.component';
import { EstimateInputListComponent } from './estimate-input-list/estimate-input-list.component';

@NgModule({
  declarations: [RootPageComponent, PdfChartComponent, EstimateInputListComponent],
  imports: [CommonModule, NgxChartsModule, FormsModule, RootPageRoutingModule],
})
export class RootPageModule {}
