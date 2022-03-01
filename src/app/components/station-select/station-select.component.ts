import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';
import { OpenCDMSAPIModel } from 'src/models';

@Component({
  selector: 'app-station-select',
  templateUrl: './station-select.component.html',
  styleUrls: ['./station-select.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class StationSelectComponent implements OnInit {
  public stations: OpenCDMSAPIModel.components['schemas']['StationQueryResponse']['result'] = [];
  public static componentName = 'station-select';

  constructor(private api: OpenCDMSApiService) {}

  async ngOnInit() {
    const req = this.api.path('/v1/stations/').method('get').create();
    const res = await req({}).catch((err) => this.api.handleError(err));
    if (res) {
      this.stations = res.data.result;
    }
  }
}
