import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaticSummaryComponent } from './climatic-summary.component';

describe('ClimaticSummaryComponent', () => {
  let component: ClimaticSummaryComponent;
  let fixture: ComponentFixture<ClimaticSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaticSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaticSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
