import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';
import { EstimateInput } from '../type';

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
  @Input() estimateInput: EstimateInput | undefined;

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
    if (!this.estimateInput) {
      return;
    }
    if (!this.validInput(this.estimateInput)) {
      return;
    }

    const series = this.buildSeries(this.estimateInput);
    this.results = [
      {
        name: 'estimation',
        series,
      },
    ];
  }

  private validInput(estimateInput: EstimateInput) {
    const { optimistic, mode, pessimistic } = estimateInput;
    if (Number.isInteger(optimistic) && Number.isInteger(mode) && Number.isInteger(pessimistic)) {
      return true;
    } else {
      return false;
    }
  }

  private buildSeries(estimateInput: EstimateInput) {
    const { optimistic, mode, pessimistic } = estimateInput;
    const data = Array(pessimistic + 1).fill(0);
    const quadraticFunction = this.buildQuadraticFunction(optimistic, mode, pessimistic);
    const series = data.map((_, index) => {
      return {
        name: `${index}`,
        value: quadraticFunction(index),
      };
    });
    series[optimistic].value = 0.1;
    series[pessimistic].value = 1;
    return series;
  }

  private buildQuadraticFunction(optimistic: number, mode: number, pessimistic: number) {
    const point1x = (mode + optimistic) / 2;
    const point1y = 50;
    const point2x = (pessimistic + mode) / 2;
    const point2y = 50;
    const a1 = point1y / (point1x - optimistic) ** 2;
    const a2 = point2y / (point2x - mode) ** 2;
    const f1 = (x: number) => a1 * (x - optimistic) ** 2;
    const f2 = (x: number) => -a1 * (x - mode) ** 2 + 100;
    const f3 = (x: number) => -a2 * (x - mode) ** 2 + 100;
    const f4 = (x: number) => a2 * (x - pessimistic) ** 2;
    const quadraticFunction = (value: number) => {
      if (value < optimistic) {
        return 0;
      } else if (value < point1x) {
        return f1(value);
      } else if (value < mode) {
        return f2(value);
      } else if (value < point2x) {
        return f3(value);
      } else if (value < pessimistic) {
        return f4(value);
      } else {
        return 0;
      }
    };
    return quadraticFunction;
  }
}
