import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPlotComponent } from './inventory-plot.component';

describe('InventoryPlotComponent', () => {
  let component: InventoryPlotComponent;
  let fixture: ComponentFixture<InventoryPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryPlotComponent ]
    })
    .compileComponents();
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
