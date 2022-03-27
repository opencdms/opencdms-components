import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryStatisticSelectComponent } from './summary-statistic-select.component';

describe('SummaryStatisticSelectComponent', () => {
  let component: SummaryStatisticSelectComponent;
  let fixture: ComponentFixture<SummaryStatisticSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryStatisticSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryStatisticSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
