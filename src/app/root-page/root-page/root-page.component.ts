import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimateInput } from '../type';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent implements OnInit {
  estimateInput?: EstimateInput;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const queryParamMap = this.route.snapshot.queryParamMap;
    const optimistic = parseInt(queryParamMap.get('o') ?? '5', 10);
    const mode = parseInt(queryParamMap.get('m') ?? '8', 10);
    const pessimistic = parseInt(queryParamMap.get('p') ?? '15', 10);
    this.estimateInput = {
      optimistic,
      mode,
      pessimistic,
    };
  }

  onChange(estimateInput: EstimateInput) {
    this.estimateInput = estimateInput;
  }
}
