import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';

interface ResultType {
  name: string;
  series: {
    name: string;
    value: number;
  }[];
}

@Component({
  selector: 'app-pdf-chart',
  templateUrl: './pdf-chart.component.html',
  styleUrls: ['./pdf-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfChartComponent implements OnInit, OnChanges {
  @Input() optimistic = 0;
  @Input() mode = 0;
  @Input() pessimistic = 0;

  results: ResultType[] = [];
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

  ngOnChanges(_changes: SimpleChanges) {
    if (!this.validInput()) {
      return;
    }

    this.results = [
      {
        name: 'estimation',
        series: [
          {
            name: `${this.optimistic} hours`,
            value: 0,
          },
          {
            name: `${this.mode} hours`,
            value: 100,
          },
          {
            name: `${this.pessimistic} hours`,
            value: 0,
          },
        ],
      },
    ];
  }

  private validInput() {
    if (Number.isInteger(this.optimistic) && Number.isInteger(this.mode) && Number.isInteger(this.pessimistic)) {
      return true;
    } else {
      return false;
    }
  }
}
