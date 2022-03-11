import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-summary-type-select',
  templateUrl: './summary-type-select.component.html',
  styleUrls: ['./summary-type-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SummaryTypeSelectComponent implements OnInit {
  public static componentName = 'summary-type-select';

  public options = [
    { label: 'Mean', value: 'mean' },
    { label: 'Total', value: 'total' },
  ];

  public form;

  constructor(fb: FormBuilder) {
    this.form = new FormBuilder().group({
      type: fb.control('mean'),
    });
  }

  ngOnInit(): void {}

  setValue(value: string): void {
    this.form.setValue({ type: value });
  }
}
