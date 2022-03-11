import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface IDialogValues {
  station_ids: string[];
  element_ids: string[];
}

@Component({
  selector: 'app-inventory-plot',
  templateUrl: './inventory-plot.component.html',
  styleUrls: ['./inventory-plot.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class InventoryPlotComponent {
  public static componentName = 'inventory-plot';

  public form;

  dialogValues: IDialogValues = {
    station_ids: [],
    element_ids: [],
  };

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      station_ids: fb.control(this.dialogValues.station_ids, Validators.required),
      element_ids: fb.control(this.dialogValues.element_ids, Validators.required),
    });
  }

  public onSubmit(e: Event) {
    e.preventDefault;
    console.log('submitting', this.form.value);
    alert('TODO');
  }

  setValue(key: keyof IDialogValues, value: any) {
    this.form.patchValue({ [key]: value });
  }

  setStationIds(value: any[]) {
    const setValue = value.map((v) => v.station_id);
    this.setValue('station_ids', setValue);
  }
  setElementIds(value: any[]) {
    const setValue = value.map((v) => v.element_id);
    this.setValue('element_ids', setValue);
  }
}
