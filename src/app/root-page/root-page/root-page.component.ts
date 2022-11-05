import { Component, OnInit } from '@angular/core';
import { EstimateInput } from '../type';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent implements OnInit {
  estimateInput?: EstimateInput;

  constructor() {}

  ngOnInit() {
    this.estimateInput = {
      optimistic: 5,
      mode: 8,
      pessimistic: 15,
    };
  }

  onChange(estimateInput: EstimateInput) {
    this.estimateInput = estimateInput;
  }
}
