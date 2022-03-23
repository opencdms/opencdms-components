import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogDataService } from 'src/app/services/dialog-data.service';
import { NoEmptyValuesValidator } from 'src/app/validators/noEmptyValues';
import { ComponentsApiModel } from 'src/models';
import { DialogBaseComponent } from '../dialog.base';

interface IDialogValues {
  station_ids: string[];
  element_ids: number[];
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

  constructor(fb: FormBuilder, dialogDataService: DialogDataService) {
    super(
      {
        station_ids: [[], Validators.required],
        element_ids: [[], Validators.required],
        period: [['', ''], NoEmptyValuesValidator()],
      },
      fb,
      dialogDataService
    );
  }

  public override async onSubmit(e: Event) {
    const req = this.dialogDataService
      .endpoint('/v1/products/inventory-plot/')
      .method('post')
      .create({ response_type: true });
    const params = this.formatParamValues();
    await this.dialogDataService.submitDialog(req, { ...params, response_type: 'base64' });
  }

  private formatParamValues(): ComponentsApiModel.components['schemas']['Body_create_v1_products_inventory_plot__post'] {
    const values = this.form.value as IDialogValues;
    return {
      data_params: {
        station_ids: values.station_ids.map((id) => Number(id)),
        period: values.period,
        elements: values.element_ids,
      },
      product_params: {},
    };
  }

  setValue(key: keyof IDialogValues, value: any) {
    this.form.patchValue({ [key]: value });
  }
}
