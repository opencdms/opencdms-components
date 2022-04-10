import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogDataService } from 'src/app/services/dialog-data.service';
import { NoEmptyValuesValidator } from 'src/app/validators/noEmptyValues';
import { ComponentsApiModel } from 'src/models';
import { DialogBaseComponent } from '../dialog.base';

interface IDialogValues {
  station_ids: string[];
  element_ids: number[];
  period: [string, string];
  summary_statistic: string;
  summary_type: string;
}
/** Data submission type combines expected body and query params */
type IDialogDef = ComponentsApiModel.components['schemas']['Body_create_v1_products_climatic_summary__post'] &
  ComponentsApiModel.operations['create_v1_products_climatic_summary__post']['parameters']['query'];

@Component({
  selector: 'app-climatic-summary',
  templateUrl: './climatic-summary.component.html',
  styleUrls: ['./climatic-summary.component.scss', '../dialogs.scss'],
})
export class ClimaticSummaryComponent extends DialogBaseComponent {
  public static componentName = 'climatic-summary';

  constructor(fb: FormBuilder, dialogDataService: DialogDataService) {
    super(
      {
        station_ids: [[], Validators.required],
        element_ids: [[], Validators.required],
        period: [['', ''], NoEmptyValuesValidator()],
        summary_statistic: ['monthly', Validators.required],
        summary_type: ['mean', Validators.required],
      },
      fb,
      dialogDataService
    );
  }

  public override async onSubmit(e: Event) {
    const req = this.dialogDataService
      .endpoint('/v1/products/climatic-summary/')
      .method('post')
      .create({ response_type: true });
    const params = this.formatParamValues();
    await this.dialogDataService.submitDialog<IDialogDef>(req, { ...params, response_type: 'records' });
  }

  private formatParamValues(): IDialogDef {
    const values = this.form.value as IDialogValues;
    return {
      data_params: {
        station_ids: values.station_ids.map((id) => Number(id)),
        period: values.period,
        elements: values.element_ids,
      },
      product_params: {
        to: values.summary_statistic,
      },
    };
  }
}
