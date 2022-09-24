import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-pdf-chart',
  templateUrl: './pdf-chart.component.html',
  styleUrls: ['./pdf-chart.component.scss'],
})
export class PdfChartComponent implements OnInit {
  results = [
    {
      name: 'estimation',
      series: [
        {
          name: '10 hours',
          value: 0,
        },
        {
          name: '18 hours',
          value: 100,
        },
        {
          name: '30 hours',
          value: 0,
        },
      ],
    },
  ];
  view: [number, number] = [700, 300];
  legend = false;
  showLabels = true;
  animations = false;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  yAxisLabel = 'Probability';
  curve = shape.curveNatural;
  colorScheme: Color = {
    domain: ['#CFC0BB'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() {}

  ngOnInit() {}
}
