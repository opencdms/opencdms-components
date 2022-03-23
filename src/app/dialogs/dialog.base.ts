import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentsApiModel } from 'src/models';
import { DialogDataService } from '../services/dialog-data.service';

export type IDialogEndpoint = keyof ComponentsApiModel.paths;

@Component({
  template: ``,
})
export class DialogBaseComponent {
  public form: FormGroup;

  /**
   * @param fb Angular formBuilder instance
   * @param formControlsConfig Object containing formbuilder group definitions
   * @example
   * ```
   * {
   *    some_key: ['initial value',validators]
   * }
   * ```
   * */
  constructor(
    @Inject('formControlsConfig') formControlsConfig: { [key: string]: any },
    fb: FormBuilder,
    public dialogDataService: DialogDataService
  ) {
    this.form = fb.group(formControlsConfig);
  }

  /** Handle submitting form */
  public async onSubmit(e: Event) {
    e.preventDefault;
    this.form.disable();
    // TODO - decide how to link best to individual dialog endpoints/methods
    console.log('TODO');
    this.form.enable();
  }
}
