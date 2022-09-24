import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfChartComponent } from './pdf-chart.component';

describe('PdfChartComponent', () => {
  let component: PdfChartComponent;
  let fixture: ComponentFixture<PdfChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
