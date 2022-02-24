import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestComponent implements OnInit {
  public static componentName = 'test';

  constructor(private testService: TestService) {
    console.log('hello test component');
  }

  ngOnInit(): void {
    this.testService.test();
  }
}
