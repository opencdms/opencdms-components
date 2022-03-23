import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogDataService } from '../services/dialog-data.service';

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
    fb: FormBuilder,
    @Inject('formControlsConfig') formControlsConfig: { [key: string]: any },
    private dialogDataService: DialogDataService
  ) {
    this.form = fb.group(formControlsConfig);
  }

  /** Handle submitting form */
  public async onSubmit(e: Event) {
    e.preventDefault;
    this.form.disable();
    await this.dialogDataService.submitDialog(this.form.value);
    this.form.enable();
  }
}
