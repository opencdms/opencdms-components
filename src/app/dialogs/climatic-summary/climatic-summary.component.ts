import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoEmptyValuesValidator } from 'src/app/validators/noEmptyValues';
import { DialogBaseComponent } from '../dialog.base';

@Component({
  selector: 'app-climatic-summary',
  templateUrl: './climatic-summary.component.html',
  styleUrls: ['./climatic-summary.component.scss'],
})
export class ClimaticSummaryComponent extends DialogBaseComponent {
  public static componentName = 'climatic-summary';

  constructor(fb: FormBuilder) {
    super(fb, {
      station_ids: [[], Validators.required],
      element_ids: [[], Validators.required],
      period: [['', ''], NoEmptyValuesValidator()],
    });
  }

  ngOnInit(): void {}
}
