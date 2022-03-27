import { ChangeDetectorRef, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';

type IPeriodName = 'start' | 'end';

/** Shorthand options used to populate actual values from data */
type IPeriodValueAlias = 'all' | 'any' | 'custom';

interface IAliasOption {
  label: string;
  sublabel?: string;
  value: IPeriodValueAlias;
  aliasValue: string;
}
type IPeriodAliasValues = {
  [name in IPeriodName]: { [value in IPeriodValueAlias]: string };
};

const PERIOD_ALIAS_VALUES: IPeriodAliasValues = {
  start: { any: '', all: '', custom: '' },
  end: { any: '', all: '', custom: '' },
};

type IAliasFormValues = { [name in IPeriodName]: IPeriodValueAlias };

@Component({
  selector: 'app-period-select',
  templateUrl: './period-select.component.html',
  styleUrls: ['./period-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
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
  public periodAliasValues = PERIOD_ALIAS_VALUES;
  public startOptions = this.generateStartOptions();
  public endOptions = this.generateEndOptions();

  public aliasForm;

  public dateValues = { start: '', end: '' };

  constructor(fb: FormBuilder, cdr: ChangeDetectorRef) {
    super(cdr);
    this.aliasForm = fb.group({
      start: ['custom'],
      end: ['custom'],
    });
  }

  /** Use a short-hand alias method to set the start or end period */
  public setPeriodByAlias(period: IPeriodName, alias: IPeriodValueAlias) {
    this.aliasForm.patchValue({ [period]: alias });
    this.updateValues();
  }

  /** Manually specify the value for a given alias (e.g. 'custom' value) */
  public setPeriodCustomValue(period: IPeriodName, customValue: string) {
    this.periodAliasValues[period].custom = customValue;
    this.updateValues();
  }

  /** When initial values set ensure the selectedElements highlighted also matches */
  public override handleInitialValueSet(v: [string, string]) {
    this.setPeriodCustomValue('start', v[0]);
    this.setPeriodCustomValue('end', v[1]);
  }

  /** Reflect selected period alias values to main value control */
  private updateValues() {
    const { start: startAlias, end: endAlias } = this.aliasForm.value as IAliasFormValues;
    this.dateValues = {
      start: this.periodAliasValues.start[startAlias],
      end: this.periodAliasValues.end[endAlias],
    };
    this.value = [this.dateValues.start, this.dateValues.end];
  }

  private generateStartOptions(): IAliasOption[] {
    return [
      { label: 'Earliest date', value: 'any', aliasValue: this.periodAliasValues.start.any },
      { label: 'Earliest date', value: 'all', aliasValue: this.periodAliasValues.start.all, sublabel: 'all stations' },
      { label: 'Custom', value: 'custom', aliasValue: this.periodAliasValues.start.custom },
    ];
  }
  private generateEndOptions(): IAliasOption[] {
    return [
      { label: 'Latest date', value: 'any', aliasValue: this.periodAliasValues.end.any },
      { label: 'Latest date', value: 'all', aliasValue: this.periodAliasValues.end.all, sublabel: 'all stations' },
      { label: 'Custom', value: 'custom', aliasValue: this.periodAliasValues.end.custom },
    ];
  }
}
