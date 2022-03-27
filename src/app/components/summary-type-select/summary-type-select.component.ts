import { ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';

@Component({
  selector: 'app-summary-type-select',
  templateUrl: './summary-type-select.component.html',
  styleUrls: ['./summary-type-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SummaryTypeSelectComponent),
      multi: true,
    },
  ],
})
export class SummaryTypeSelectComponent extends FormComponentBase {
  public static componentName = 'summary-type-select';
  public options = [
    { label: 'Mean', value: 'mean' },
    { label: 'Total', value: 'total' },
  ];

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  public setValue(value: string) {
    this.value = value;
  }
}
