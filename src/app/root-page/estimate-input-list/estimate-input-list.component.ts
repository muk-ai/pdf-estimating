import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstimateInput } from '../type';

@Component({
  selector: 'app-estimate-input-list',
  templateUrl: './estimate-input-list.component.html',
  styleUrls: ['./estimate-input-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstimateInputListComponent implements OnInit {
  @Output() change = new EventEmitter<EstimateInput>();
  optimistic = 5;
  mode = 8;
  pessimistic = 15;

  constructor() {}

  ngOnInit() {
    this.emit();
  }

  emit() {
    const data = {
      optimistic: this.optimistic,
      mode: this.mode,
      pessimistic: this.pessimistic,
    };
    this.change.emit(data);
  }
}
