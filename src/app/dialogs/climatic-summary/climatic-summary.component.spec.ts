import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';

import { ClimaticSummaryComponent } from './climatic-summary.component';

describe('ClimaticSummaryComponent', () => {
  let component: ClimaticSummaryComponent;
  let fixture: ComponentFixture<ClimaticSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClimaticSummaryComponent],
      providers: [FormBuilder, OpenCDMSApiService],
    }).compileComponents();
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
