import { ChangeDetectorRef, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';

@Component({
  selector: 'app-period-select',
  templateUrl: './period-select.component.html',
  styleUrls: ['./period-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PeriodSelectComponent),
      multi: true,
    },
  ],
})
export class PeriodSelectComponent extends FormComponentBase {
  public static componentName = 'period-select';

  @Input() set selectedStations(selectedStations: any) {
    console.log('setting stations', selectedStations);
  }

  public form;

  public startOptions = [
    { label: 'Earliest date', value: 'max-any' },
    { label: 'Earliest date', sublabel: 'all stations', value: 'max-all' },
    { label: 'Custom', value: 'custom' },
  ];
  public endOptions = [
    { label: 'Latest date', sublabel: 'all stations', value: 'max-all' },
    { label: 'Latest date', value: 'max-any' },
    { label: 'Custom', value: 'custom' },
  ];

  constructor(fb: FormBuilder, cdr: ChangeDetectorRef) {
    super(cdr);
    this.form = fb.group({
      start: ['max-all'],
      end: ['max-all'],
    });
  }

  public setValue(field: string, value: any) {
    this.form.patchValue({ [field]: value });
    this.value = this.form.value;
  }
}
