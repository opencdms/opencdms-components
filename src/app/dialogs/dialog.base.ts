import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(fb: FormBuilder, @Inject('formControlsConfig') formControlsConfig: { [key: string]: any }) {
    this.form = fb.group(formControlsConfig);
  }

  /** Handle submitting form */
  public onSubmit(e: Event) {
    e.preventDefault;
    console.log('submitting', this.form.value);
    alert('TODO');
  }
  
}
