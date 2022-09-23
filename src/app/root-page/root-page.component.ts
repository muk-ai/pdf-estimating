import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent implements OnInit {
  multi: any[];
  view: [number, number] = [700, 300];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() {
    this.multi = multi;
  }

  ngOnInit(): void {}

  onSelect(event: any) {
    console.log(event);
  }
}
