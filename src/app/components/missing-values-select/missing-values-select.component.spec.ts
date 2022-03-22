import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingValuesSelectComponent } from './missing-values-select.component';

describe('MissingValuesSelectComponent', () => {
  let component: MissingValuesSelectComponent;
  let fixture: ComponentFixture<MissingValuesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingValuesSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingValuesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
