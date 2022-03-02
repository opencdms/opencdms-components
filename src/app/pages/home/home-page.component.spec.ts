import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

import { HomePageComponent } from './home-page.component';

@Component({ selector: 'app-banner', template: '' })
class BannerStubComponent {}

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {}

@Component({ selector: 'app-welcome', template: '' })
class WelcomeStubComponent {}

@Component({ selector: 'c-container', template: '' })
class CContainerStubComponent {}

const STUB_COMPONENTS = [BannerStubComponent, RouterOutletStubComponent, WelcomeStubComponent, CContainerStubComponent];

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent, ...STUB_COMPONENTS],
      imports: [],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of(
              convertToParamMap({
                componentName: 'test',
              })
            ),
          },
        },
        {
          provide: Router,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
