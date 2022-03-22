import { ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';

@Component({
  selector: 'app-missing-values-select',
  templateUrl: './missing-values-select.component.html',
  styleUrls: ['./missing-values-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MissingValuesSelectComponent),
      multi: true,
    },
  ],
})
export class MissingValuesSelectComponent extends FormComponentBase {
  public static componentName = 'missing-values-select';

  public form;

  constructor(cdr: ChangeDetectorRef, fb: FormBuilder) {
    super(cdr);
    this.form = fb.group({
      _enabled: [false],
      _naMaxAllowedEnabled: [false],
      naMaxAllowed: [1],
      _naMinRequiredEnabled: [false],
      naMinRequired: [340],
      _naMaxPcEnabled: [false],
      naMaxPc: [1],
      _naMaxConsecutiveEnabled: [false],
      naMaxConsecutive: [4],
    });
  }
}
