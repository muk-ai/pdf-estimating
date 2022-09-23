import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootPageRoutingModule } from './root-page-routing.module';
import { RootPageComponent } from './root-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    RootPageComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    RootPageRoutingModule
  ]
})
export class RootPageModule { }
