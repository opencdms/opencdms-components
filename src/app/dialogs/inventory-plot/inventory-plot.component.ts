import { Component, OnInit } from '@angular/core';

interface IDialogValues {
  station_ids: string[];
}

@Component({
  selector: 'app-inventory-plot',
  templateUrl: './inventory-plot.component.html',
  styleUrls: ['./inventory-plot.component.scss'],
})
export class InventoryPlotComponent implements OnInit {
  public static componentName = 'inventory-plot';

  dialogValues: IDialogValues = {
    station_ids: [],
  };

  constructor() {}

  ngOnInit(): void {}

  setValue(key: keyof IDialogValues, value: any) {
    console.log('setting value', key, value);
    this.dialogValues[key] = value;
  }

  setStationIds(value: any[]) {
    this.setValue(
      'station_ids',
      value.map((v) => v.station_id)
    );
  }
}
