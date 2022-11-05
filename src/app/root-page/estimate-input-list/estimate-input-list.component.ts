import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EstimateInput } from '../type';

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

@Component({
  selector: 'app-estimate-input-list',
  templateUrl: './estimate-input-list.component.html',
  styleUrls: ['./estimate-input-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstimateInputListComponent implements OnInit {
  @Input() estimateInput?: EstimateInput;
  @Output() change = new EventEmitter<EstimateInput>();
  optimistic = 0;
  mode = 0;
  pessimistic = 0;

  constructor() {}

  ngOnInit() {
    if (!this.estimateInput) {
      return;
    }

    this.optimistic = this.estimateInput.optimistic;
    this.mode = this.estimateInput.mode;
    this.pessimistic = this.estimateInput.pessimistic;
  }

  emit() {
    const data = {
      optimistic: this.optimistic,
      mode: this.mode,
      pessimistic: this.pessimistic,
    };
    this.change.emit(data);
  }

  onOptimisticChange(newValue: number) {
    if (this.mode < newValue) {
      this.mode = newValue;
    }
    if (this.pessimistic < newValue) {
      this.pessimistic = newValue;
    }
    this.optimistic = clamp(newValue, 0, this.mode);
    this.emit();
  }

  onModeChange(newValue: number) {
    if (newValue < this.optimistic) {
      this.optimistic = Math.max(newValue, 0);
    }
    if (this.pessimistic < newValue) {
      this.pessimistic = newValue;
    }
    this.mode = clamp(newValue, 0, this.pessimistic);
    this.emit();
  }

  onPessimisticChange(newValue: number) {
    if (newValue < this.optimistic) {
      this.optimistic = Math.max(newValue, 0);
    }
    if (newValue < this.mode) {
      this.mode = Math.max(newValue, 0);
    }
    this.pessimistic = clamp(newValue, 0, Infinity);
    this.emit();
  }
}
