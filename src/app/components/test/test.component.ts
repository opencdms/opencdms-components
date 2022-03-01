import { Component, ViewEncapsulation } from '@angular/core';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';

abstract class ComponentBase {
  public static componentName: string = '';
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestComponent implements ComponentBase {
  public static componentName = 'test';

  constructor(private api: OpenCDMSApiService) {}

  public async fetchData() {
    const req = this.api.path('/v1/climsoft-users/').method('get').create();
    const response = await req({}).catch((err) => this.api.handleError(err));
    if (response) {
      console.log('response', response.data);
    }
  }
}
