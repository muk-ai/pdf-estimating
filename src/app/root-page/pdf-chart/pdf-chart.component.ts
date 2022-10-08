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

    const series = this.buildSeries();
    this.results = [
      {
        name: 'estimation',
        series,
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

  private buildSeries() {
    const data = Array(this.pessimistic + 1).fill(0);
    const quadraticFunction = this.buildQuadraticFunction();
    const series = data.map((_, index) => {
      return {
        name: `${index}`,
        value: quadraticFunction(index),
      };
    });
    return series;
  }

  private buildQuadraticFunction() {
    const point1x = (this.mode + this.optimistic) / 2;
    const point1y = 50;
    const point2x = (this.pessimistic + this.mode) / 2;
    const point2y = 50;
    const a1 = point1y / (point1x - this.optimistic) ** 2;
    const a2 = point2y / (point2x - this.mode) ** 2;
    const f1 = (x: number) => a1 * (x - this.optimistic) ** 2;
    const f2 = (x: number) => -a1 * (x - this.mode) ** 2 + 100;
    const f3 = (x: number) => -a2 * (x - this.mode) ** 2 + 100;
    const f4 = (x: number) => a2 * (x - this.pessimistic) ** 2;
    const quadraticFunction = (value: number) => {
      if (value < this.optimistic) {
        return 0;
      } else if (value < point1x) {
        return f1(value);
      } else if (value < this.mode) {
        return f2(value);
      } else if (value < point2x) {
        return f3(value);
      } else if (value < this.pessimistic) {
        return f4(value);
      } else {
        return 0;
      }
    };
    return quadraticFunction;
  }
}
