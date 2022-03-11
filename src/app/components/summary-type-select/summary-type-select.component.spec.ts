import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTypeSelectComponent } from './summary-type-select.component';

describe('SummaryTypeSelectComponent', () => {
  let component: SummaryTypeSelectComponent;
  let fixture: ComponentFixture<SummaryTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
