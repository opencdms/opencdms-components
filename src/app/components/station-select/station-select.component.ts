import { Component, EventEmitter, HostBinding, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';
import { OpenCDMSAPIModel } from 'src/models';

type IStation = OpenCDMSAPIModel.components['schemas']['StationQueryResponse']['result'][0];

@Component({
  selector: 'app-station-select',
  templateUrl: './station-select.component.html',
  styleUrls: ['./station-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class StationSelectComponent implements OnInit {
  public static componentName = 'station-select';
  public dataIsLoading = true;
  public stations: IStation[] = [];

  public selectedStations: { [station_id: string]: IStation } = {};

  @Output() valueChanged = new EventEmitter<IStation[]>();

  /** Reflect selected value as host attribute */
  @HostBinding('value')
  get value(): IStation[] {
    return Object.values(this.selectedStations);
  }

  constructor(private api: OpenCDMSApiService) {}

  async ngOnInit() {
    const req = this.api.path('/v1/stations/').method('get').create();
    const res = await req({}).catch((err) => this.api.handleError(err));
    if (res) {
      this.stations = res.data.result;
    }
    this.dataIsLoading = false;
  }

  public toggleStationSelected(station: IStation) {
    if (this.selectedStations.hasOwnProperty(station.station_id)) {
      delete this.selectedStations[station.station_id];
    } else {
      this.selectedStations[station.station_id] = station;
    }
    const value = Object.values(this.selectedStations);
    this.valueChanged.next(value);
  }
}
