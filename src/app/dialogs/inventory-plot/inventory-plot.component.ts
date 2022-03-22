import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoEmptyValuesValidator } from 'src/app/validators/noEmptyValues';
import { DialogBaseComponent } from '../dialog.base';

interface IDialogValues {
  station_ids: string[];
  element_ids: string[];
  period: [string, string];
}

@Component({
  selector: 'app-inventory-plot',
  templateUrl: './inventory-plot.component.html',
  styleUrls: ['./inventory-plot.component.scss', '../dialogs.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class InventoryPlotComponent extends DialogBaseComponent {
  public static componentName = 'inventory-plot';

  constructor(fb: FormBuilder) {
    super(fb, {
      station_ids: [[], Validators.required],
      element_ids: [[], Validators.required],
      period: [['', ''], NoEmptyValuesValidator()],
    });
  }

  private formatValues() {
    const values = this.form.value as IDialogValues;
    // TODO - handle mapping formValues to api params
  }

  setValue(key: keyof IDialogValues, value: any) {
    this.form.patchValue({ [key]: value });
  }
}
