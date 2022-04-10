import { ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';

@Component({
  selector: 'app-summary-statistic-select',
  templateUrl: './summary-statistic-select.component.html',
  styleUrls: ['./summary-statistic-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SummaryStatisticSelectComponent),
      multi: true,
    },
  ],
})
export class SummaryStatisticSelectComponent extends FormComponentBase {
  public static componentName = 'summary-statistic-select';

  public options = [
    { label: 'hourly', value: 'hourly' },
    { label: 'daily', value: 'daily' },
    { label: 'pentad', value: 'pentad' },
    { label: 'dekadal', value: 'dekadal' },
    { label: 'monthly', value: 'monthly' },
    { label: 'annual-within-year', value: 'annual-within-year' },
    { label: 'annual', value: 'annual' },
    { label: 'longterm-monthly', value: 'longterm-monthly' },
    { label: 'longterm-within-year', value: 'longterm-within-year' },
    { label: 'station', value: 'station' },
    { label: 'overall', value: 'overall' },
  ];

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  public setSummaryType(value: string) {
    this.value = value;
  }
}
