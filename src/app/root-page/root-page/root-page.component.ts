import { Component, OnInit } from '@angular/core';
import { EstimateInput } from '../type';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent implements OnInit {
  estimateInput: EstimateInput | undefined;

  constructor() {}

  ngOnInit() {}

  onChange(estimateInput: EstimateInput) {
    this.estimateInput = estimateInput;
  }
}
