import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';

import { InventoryPlotComponent } from './inventory-plot.component';

describe('InventoryPlotComponent', () => {
  let component: InventoryPlotComponent;
  let fixture: ComponentFixture<InventoryPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryPlotComponent],
      providers: [FormBuilder, OpenCDMSApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
