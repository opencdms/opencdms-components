import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSelectComponent } from './element-select.component';
import { LoaderComponent } from '../loader/loader.component';

describe('ElementSelectComponent', () => {
  let component: ElementSelectComponent;
  let fixture: ComponentFixture<ElementSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementSelectComponent, LoaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
