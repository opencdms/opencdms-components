import { ChangeDetectorRef, Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';
import { OpenCDMSAPIModel } from 'src/models';

type IStation = OpenCDMSAPIModel.components['schemas']['StationQueryResponse']['result'][0];

@Component({
  selector: 'app-station-select',
  templateUrl: './station-select.component.html',
  styleUrls: ['./station-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StationSelectComponent),
      multi: true,
    },
  ],
})
export class StationSelectComponent extends FormComponentBase implements OnInit {
  public static componentName = 'station-select';
  public dataIsLoading = true;
  public stations: IStation[] = [];

  public selectedStations: { [station_id: string]: boolean } = {};

  constructor(cdr: ChangeDetectorRef, private api: OpenCDMSApiService) {
    super(cdr);
  }

  async ngOnInit() {
    const req = this.api.path('/v1/stations/').method('get').create();
    const res = await req({ limit: 999999 }).catch((err) => this.api.handleError(err));
    if (res) {
      this.stations = res.data.result;
    }
    this.dataIsLoading = false;
  }

  /** When initial values set ensure the selectedElements highlighted also matches */
  public override handleInitialValueSet(v: number[]) {
    for (const station_id of v) {
      this.toggleStationSelected(`${station_id}`);
    }
  }

  public toggleStationSelected(station_id: IStation['station_id']) {
    if (this.selectedStations[station_id]) {
      delete this.selectedStations[station_id];
    } else {
      this.selectedStations[station_id] = true;
    }
    const value = Object.keys(this.selectedStations).map((station_id) => Number(station_id));
    this.value = value;
  }
}
